const mongoose = require('mongoose');
const catsUnderSchema = new mongoose.Schema({
	catCode: {
		type: String,
		required: true,
	},
	catName: {
		type: String,
	},
	subCatName: {
		type: String,
	},
	subCatCd: {
		type: String,
	},
});

const CatUnder = mongoose.model('CatUnder', catUnderSchema);
module.exports = User;
