const express = require('express');
const router = express.Router();
const moment = require('moment');
const { authenticate, authorize } = require('../controllers/auth');

//models
const Customer = require('../models/Customer');

//get all activations
router.get('/', authenticate, authorize(['admin']), async (req, res) => {
	//this route can take parameters pass it by ?param=value
	try {
		const apiError = {};

		let requestQueryObject = { ...req.query }; //make a copy of the req.query object

		let excludedQueryField = ['sort', 'page', 'pageSize', 'fields']; //define keywords in the req.query that should not be considered while querying the database

		excludedQueryField.forEach(
			(element) => delete requestQueryObject[element]
		); //delete any key in the requestQueryObject containing an element in the  excludedQueryField  array

		//advance query using gte,lte,gt,lt
		let queryToString = JSON.stringify(requestQueryObject);
		queryToString = queryToString.replace(
			/\b(gte|lte|gt|lt)\b/g,
			(match) => `$${match}`
		);

		let query = Customer.find(JSON.parse(queryToString)); // the .select excludes any spacified field before sending the document

		//sorting query result
		if (req.query.sort) {
			// to sort pass the sort param ie ?sort="field1,field2,..." //ascending
			// to sort pass the sort param ie ?sort="-field1,-field2,..." //descending
			const sortBy = req.query.sort.split(',').join(' ');
			query = query.sort(sortBy);
		} else {
			query = query.sort('-createdAt');
		}

		//field limiting
		//pass a parameter called field eg. ?fields=field1,field2,...
		if (req.query.fields) {
			const fields = req.query.fields.split(',').join(' ');
			query = query.select(fields);
		} else {
			query = query.select('-__v ');
		}

		//pagination
		//pass page and pageSize params  eg  ?page=1&pageSize=20

		const page = req.query.page * 1 || 1;
		const pageSize = req.query.pageSize * 1 || 50;
		const skip = (page - 1) * pageSize;
		query = query.skip(skip).limit(pageSize);

		//handle a case where user specify page that does not exists
		if (req.query.page) {
			let numberOfDocument = await Customer.countDocuments();
			if (skip >= numberOfDocument) {
				apiError.message = 'This page does not exits';
				console.log('apiError', apiError);
				return res.status(404).json(apiError);
			}
		}

		//execute query
		const customers = await query; // query.sort().select().skip().limit()
		return res.status(200).json({
			success: true,

			data: {
				customers,
			},
		});
	} catch (err) {
		console.log(err);
		return res.status(400).json({
			success: false,
			message: err.message,
		});
	}
});

//get single activation,
//working fine
router.get('/:id', async (req, res) => {
	try {
		const apiError = {};
		const customer = await Customer.findById(req.params.id);
		if (!customer) {
			apiError.message = `Invalid customer id `;
			apiError.success = false;
			console.log('apiError', apiError);
			return res.status(404).json(apiError);
		}

		return res.status(200).json({
			success: true,
			data: {
				customer,
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

//activate a user aaccount
//working fine
router.post('/', authenticate, async (req, res) => {
	const apiError = {};

	try {
		let user = req.user;

		// remove $5 from user balance
		user.balance = user.balance - 5;

		// create customers
		let customer = await Customer.create({
			amount: 5,
			user: user.userName,
			description: 'Account activation',
			transactionType: 'DEBIT',
			from: user.userName,
			to: 'Company',
			createdAt: moment(),
		});

		return res.status(201).json({
			success: true,
			data: {
				message: 'Registration successfull',
				customer,
			},
		});
	} catch (error) {
		console.log(error);
		return res.status(400).json({
			success: false,
			message: error.message,
		});
	}
});

//delete a activation by admin

router.delete('/:id', authenticate, authorize(['admin']), async (req, res) => {
	try {
		const { id } = req.params;
		await Customer.findByIdAndRemove(id);
		return res.status(204).json({
			success: true,
			data: {
				message: `customer with the id ${id} has been deleted`,
			},
		});
	} catch (err) {
		console.log(err);
		return res.status(500).json({
			success: false,
			message: err.message,
		});
	}
});

module.exports = router;
