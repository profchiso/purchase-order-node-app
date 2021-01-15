const mongoose = require('mongoose');
const storeFrontSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
		index: true,
	},
	productCode: {
		type: String,
		index: true,
	},
	postTitle: {
		type: String,
		index: true,
	},
	description: {
		type: String,
	},

	productPrice: {
		type: Number,
	},
	previousCost: {
		type: Number,
	},
	amountAvailable: {
		type: Number,
	},
	wholesalePrice: {
		type: Number,
	},
	wholesaleQuantity: {
		type: Number,
	},
	category: {
		type: String,
	},
	liquidContent: {
		type: String,
	},
	productWeight: {
		type: String,
	},
	sellingUnit: {
		type: String,
	},
	itemColor: {
		type: String,
	},
	productExpiry: {
		type: Date,
	},
	quantitySold: {
		type: Number,
	},
	deliveryTime: {
		type: String,
	},
	deliveryFee: {
		type: Number,
	},
	mainProductImage: {
		type: String,
	},
	secondProductImage: {
		type: String,
	},
	thirdProductImage: {
		type: String,
	},
	initDel: {
		type: Number,
	},
	approvalStatus: {
		type: String,
		enum: ['Pending', 'Approved', 'Rejected'],
	},
	timePublished: {
		type: String,
	},
	datePublished: {
		type: Date,
		default: Date.now(),
	},
	timeStamp: {
		type: String,
	},
});

const HTSL_StoreFront = mongoose.model('HTSL_StoreFront', storeFrontSchema);
module.exports = HTSL_StoreFront;
