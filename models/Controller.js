const mongoose = require('mongoose');
const controllerSchema = new mongoose.Schema({
	htslUniqueCode: {
		type: String,
		required: true,
	},
	adminFirstName: {
		type: String,
	},
	adminLastName: {
		type: String,
	},
	adminEmail: {
		type: String,
	},
	adminEmail: {
		type: String,
	},
	adminPermanentPassword: {
		type: String,
	},
	adminTemporaryPassword: {
		type: String,
	},
	adminPrivilegeLevel: {
		type: String,
	},
	timeStamp: {
		type: String,
	},
});

const Controller = mongoose.model('Controller', controllerSchema);
module.exports = Controller;
