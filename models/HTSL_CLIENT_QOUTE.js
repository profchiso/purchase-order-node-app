const mongoose = require('mongoose');
const clientQouteSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
	},
	htslBusinessCode: {
		type: String,
	},
	qouteItem: {
		type: String,
	},
	quoteSpecification: {
		type: String,
	},
	qouteQuantity: {
		type: Number,
	},
	batch: {
		type: String,
	},
	requestDate: {
		type: Date,
		default: Date.now(),
	},
	requestTime: {
		type: String,
	},
	timeStamp: {
		type: String,
	},
	initDel: {
		type: Number,
	},
});

const HTSL_ClientQoute = mongoose.model('HTSL_ClientQoute', clientQouteSchema);
module.exports = HTSL_ClientQoute;
