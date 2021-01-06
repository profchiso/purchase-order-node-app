const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	userUniqueCode: {
		type: String,
		required: true,
	},
	businessCode: {
		type: String,
		unique: true,
	},

	userType: {
		type: String,
		enum: ['user', 'admin', 'developer'],
		default: 'user',
	},

	userTitle: {
		type: String,
		required: true,
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
	},
	businessAddress: {
		type: String,
		required: true,
	},
	businessState: {
		type: String,
		required: true,
	},
	businessName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
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
	},
	userPrivilege: {
		type: String,
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

	acsExp: {
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

const User = mongoose.model('User', userSchema);
module.exports = User;
