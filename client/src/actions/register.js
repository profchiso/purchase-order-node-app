import axios from 'axios';
const BASE_URL = 'https';
const CONFIG = {
	headers: {
		'content-type': 'application/json',
	},
};
export const register = (userData) => {
	return async (dispatch) => {
		try {
			const registeredUser = await axios.post(
				`${BASE_URL}/signup`,
				userData,
				CONFIG
			);

			if (registeredUser.status === 201)
				dispatch(saveRegisteredUserDataToState(registeredUser.data));
		} catch (error) {
			console.log('Registration error', error);
			dispatch(registrationError(error.response.data));
		}
	};
};
export const saveRegisteredUserDataToState = (registeredUserData) => {
	console.log(registeredUserData);
	return {
		type: 'SAVE_REGISTERED_USER_DATA',
		payload: registeredUserData,
	};
};

export const registrationError = (err) => {
	return {
		type: 'REGISTRATION_ERROR',
		payload: err,
	};
};
