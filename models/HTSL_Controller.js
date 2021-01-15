const mongoose = require('mongoose');
const controllerSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
		index: true,
	},
	adminFirstName: {
		type: String,
		indxex: true,
	},
	adminLastName: {
		type: String,
		index: true,
	},
	adminEmail: {
		type: String,
		index: true,
		required: true,
	},

	adminPermanentPassword: {
		type: String,
	},
	adminTemporaryPassword: {
		type: String,
	},
	adminPrivilegeLevel: {
		type: String,
		enum: ['Admin', 'Moderator', 'Technical'],
	},
	timeStamp: {
		type: String,
	},
});

const HTSL_Controller = mongoose.model('HTSL_Controller', controllerSchema);
module.exports = HTSL_Controller;
