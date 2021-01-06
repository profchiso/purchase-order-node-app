const mongoose = require('mongoose');
const messagingSchema = new mongoose.Schema({
	receiverCd: {
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

const Messaging = mongoose.model('Messaging', messagingSchema);
module.exports = Messaging;
