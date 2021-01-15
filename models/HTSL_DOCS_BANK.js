const mongoose = require('mongoose');
const docsBankSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
		index: true,
	},
	htslBusinessCode: {
		type: String,
		index: true,
	},
	vendorCode: {
		type: String,
	},
	vendorName: {
		type: String,
	},

	productCode: {
		type: String,
		index: true,
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
		index: true,
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
	orderTime: {
		type: Date,
		default: Date.now(),
	},
	timeStamp: {
		type: String,
	},
});

const HTSL_DocsBank = mongoose.model('HTSL_DocsBank', docsBankSchema);
module.exports = HTSL_DocsBank;
