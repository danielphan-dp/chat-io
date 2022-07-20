import * as authApi from '../../networking/api/authApi';
import { openAlertMessage } from './alertActions';

const authActions = {
  SET_USER_DETAILS: 'AUTH.SET_USER_DETAILS',
};

const setUserDetails = (userDetails) => {
  return {
    type: authActions.SET_USER_DETAILS,
    payload: {
      userDetails,
    },
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await authApi.login(userDetails);

    // TODO: remove log when finished testing
    console.log(response);

    if (response.error) {
      // show error message in alert
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await authApi.register(userDetails);

    // TODO: remove log when finished testing
    console.log(response);

    if (response.error) {
      // show error message in alert
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) =>
      dispatch(register(userDetails, navigate)),
  };
};

export default authActions;
