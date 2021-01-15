const mongoose = require('mongoose');
const subscriptionCategorySchema = new mongoose.Schema({
	categoryCode: {
		type: String,
		required: true,
		index: true,
	},
	categoryName: {
		type: String,
		index: true,
	},

	subscriptionFee: {
		type: Number,
		index: true,
		required: true,
	},
});

const HTSL_SubscriptionCategory = mongoose.model(
	'HTSL_SubscriptionCategory',
	subscriptionCategorySchema
);
module.exports = HTSL_SubscriptionCategory;
