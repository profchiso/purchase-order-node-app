import { combineReducers } from 'redux';
import { registerReducer } from './register';
// import { oauthReducer } from './oauthReducer';
// import { dashboardReducers } from './dashboardReducers';

export default combineReducers({
	registerReducer,
	// oauthReducer,
	// dashboardReducers,
});
