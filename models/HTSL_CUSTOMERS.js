const mongoose = require('mongoose');
const customerSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	htslBusinessCode: {
		type: String,
		unique: true,
		required: true,
		index: true,
	},

	userType: {
		type: String,
		enum: ['Client', 'Vendor', 'Admin'],
	},

	userTitle: {
		type: String,
	},
	userFirstName: {
		type: String,
		required: true,
	},
	userLastName: {
		type: String,
		required: true,
	},
	businessName: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	businessAddress: {
		type: String,
		required: true,
	},
	businessState: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
		unique: true,
		index: true,
	},
	phoneNumber: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	temporaryPassword: {
		type: String,
	},
	staffPosition: {
		type: String,
	},
	businessType: {
		type: String,
		index: true,
	},
	userPrivilege: {
		type: String,
		enum: ['User', 'Admin'],
	},
	registrationVerificationCode: {
		type: String,
	},
	registrationConf: {
		type: String,
	},
	registrationStatus: {
		type: String,
	},
	lastLoginDate: {
		type: Date,
		default: Date.now(),
	},

	accessExpiration: {
		type: String,
	},
	joinedDate: {
		type: Date,
		default: Date.now(),
	},
	timeStamp: {
		type: Date,
	},
});

const HTSL_Customer = mongoose.model('HTSL_Customer', customerSchema);
module.exports = HTSL_Customer;
