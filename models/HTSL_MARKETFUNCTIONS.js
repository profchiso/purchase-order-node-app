const mongoose = require('mongoose');
const marketFunctionSchema = new mongoose.Schema({
	marketCommission: {
		type: String,
		required: true,
	},
	marketSoldOne: {
		type: String,
	},
	marketSoldTwo: {
		type: String,
	},
	marketSoldThree: {
		type: String,
	},
	marketSoldFour: {
		type: String,
	},
	marketSoldFive: {
		type: String,
	},
	marketSoldSix: {
		type: String,
	},
	timeStamp: {
		type: String,
	},
});

const HTSL_MarketFunction = mongoose.model(
	'HTSL_MarketFunction',
	marketFunctionSchema
);
module.exports = HTSL_MarketFunction;
