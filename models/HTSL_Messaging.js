const mongoose = require('mongoose');
const messagingSchema = new mongoose.Schema({
	receiverCode: {
		type: String,
	},
	message: {
		type: String,
	},
	messageType: {
		type: String,
	},
	batch: {
		type: String,
	},
	sendDate: {
		type: Date,
		default: Date.now(),
	},
	sendTime: {
		type: Date,
		default: Date.now(),
	},
	timeStamp: {
		type: String,
	},
	readCheck: {
		type: Number,
	},
	initDel: {
		type: String,
	},
});

const HTSL_Messaging = mongoose.model('HTSL_Messaging', messagingSchema);
module.exports = HTSL_Messaging;
