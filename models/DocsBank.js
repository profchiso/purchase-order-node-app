const mongoose = require('mongoose');
const docsBankSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
	},
	htslBusinessCode: {
		type: String,
	},
	vendorCode: {
		type: String,
	},
	vendorName: {
		type: String,
	},
	vendorName: {
		type: String,
	},
	productCode: {
		type: String,
	},
	quantityOrdered: {
		type: Number,
	},
	unitPrice: {
		type: Number,
	},
	deliveryFee: {
		type: Number,
	},
	deliveryTime: {
		type: Date,
		default: Date.now(),
	},
	batch: {
		type: String,
	},
	approvalStatus: {
		type: String,
	},
	approvalStaffUniqueCode: {
		type: String,
	},
	cncltnStatus: {
		type: String,
	},
	initDel: {
		type: String,
	},
	orderDate: {
		type: Date,
		default: Date.now(),
	},
	timeStamp: {
		type: String,
	},
});

const DocsBank = mongoose.model('DocsBank', catsUnderSchema);
module.exports = DocsBank;
