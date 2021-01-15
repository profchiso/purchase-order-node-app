const mongoose = require('mongoose');
const catsUnderSchema = new mongoose.Schema({
	catCode: {
		type: String,
	},
	catName: {
		type: String,
	},
	subCatName: {
		type: String,
	},
	subCatCode: {
		type: String,
	},
});

const HTSL_CatUnder = mongoose.model('HTSL_CatUnder', catsUnderSchema);
module.exports = HTSL_CatUnder;
