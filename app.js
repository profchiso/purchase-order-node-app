//NPM modules
require('dotenv').config(); //require the config files
const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cronJob = require('node-cron');

//user defined modules
const userRoute = require('./routes/user');

// db controller
const connectToDB = require('./controllers/dbController');

connectToDB();

const app = express();
app.enable('trust proxy');

//middlewares
//middleware to set security HTTP headers
app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json({ extended: false })); //middleware for body-paser
app.use(bodyParser.urlencoded({ extended: true, limit: '10kb' }));
app.use(bodyParser.json());
app.use(cors()); //middle ware to allow cross origin resource sharing

//protect DB from NOSQL query injections using the express-mongo-sanitize middleware
// interset the req.body, req.params, and req.query and remove malicious codes
app.use(mongoSanitizer());

//protect data from xss attack using the xss-clean middleware
// work on HTML to sanitize the data from malicious script
app.use(xss());

//cookie parser for parsing the the request cookies
app.use(cookieParser());

//protect against parameter pollution using the hpp middleware
//works on url parameters to sanitize it eg. remove duplicate parameters
app.use(hpp({ whitelist: [] })); // use the whitelist option to specify some parameter that you want to allow duplicate in the array

//routes

app.get('/', (req, res) => {
	return res.status(200).render('index', {});
});

app.get('/logout', (req, res) => {
	res.cookie('accessToken', 'logout', {
		httpOnly: true,
		expires: new Date(Date.now() + 5 * 1000),
	});

	res.status(200).json({
		success: true,
		data: {
			accessToken: res.cookie.accessToken,
		},
	});
});

app.use('/api/v1/user', userRoute); //users route
app.use('/api/v1/activation', activationRoute); //activation  route
app.use('/api/v1/cashout', cashoutRoute); //cashout route
app.use('/api/v1/deposit', depositRoute); //deposit route
app.use('/api/v1/investment', investmentRoute); //investment route
app.use('/api/v1/withdrawal', withdrawalRoute); //withdrawal route
app.use('/api/v1/adminapi', adminAPI); //admin api  route
app.use('/api/v1/dollartransfer', dollarTransferRoute); //dollarTransfer  route
app.use('/dashboard', dasboardRoute); // dashboard route
app.use('/admin/dashboard', adminRoute); //admin route

//catch undefined endpoints
// app.use(undefinedRoutes);

//cronjobs
cronJob.schedule('*/5 * * * *', () => {
	//run every 5minutes
	UpdateMaturedInvestment();
});
cronJob.schedule('*/1 * * * *', () => {
	//run ever 1 minutes
	updateDepositStatus();
	// async function fetchCompleted() {
	// 	console.log('fetch runing');
	// 	const Deposit = require('./models/Deposit');
	// 	const coinbase = require('coinbase-commerce-node');
	// 	const Client = coinbase.Client;
	// 	Client.init(process.env.COIN_BASE_KEY);
	// 	const Charge = coinbase.resources.Charge;
	// 	// 	//end of coinbase
	// 	const pendingDeposits = await Deposit.find({
	// 		depositStatus: 'COMPLETED',
	// 	});
	// 	for (let deposit of pendingDeposits) {
	// 		const charge = await Charge.retrieve(deposit.coinBaseChargeId);
	// 		console.log(charge.payments[0].value.local.amount);
	// 	}
	// }
	// fetchCompleted();
});

cronJob.schedule('0 */4 * * *', () => {
	//runs every 10minutes
	deleteExpiredOrCanceledDeposit();
});

//spin up the server on the env port number
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});
