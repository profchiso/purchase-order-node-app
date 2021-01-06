const mongoose = require('mongoose');
const marketFunctionSchema = new mongoose.Schema({
	marketComm: {
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

const MarketFunction = mongoose.model('MarketFunction', marketFunctionSchema);
module.exports = MarketFunction;
