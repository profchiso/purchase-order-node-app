const mongoose = require('mongoose');
const clientQouteSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
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
		type: String,
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
		type: String,
	},
});

const clientQoute = mongoose.model('ClientQoute', clientQouteSchema);
module.exports = clientQoute;
