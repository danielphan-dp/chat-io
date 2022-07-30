import { AuthActions } from '../actions.types/auth.actions.types';
import * as authApi from '../../networking/api/authApi';
import { openAlertMessage } from './alert.actions';

const setUserDetails = (userDetails) => {
  return {
    type: AuthActions.SET_USER_DETAILS,
    payload: {
      userDetails,
    },
  };
};

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await authApi.login(userDetails);
    if (response.error) {
      const alertMessage = response?.exception?.response?.data;
      dispatch(openAlertMessage(alertMessage));
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
    if (response.error) {
      const alertMessage = response?.exception?.response?.data;
      dispatch(openAlertMessage(alertMessage));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

// prettier-ignore
export const getActions = (dispatch) => {
  return {
    setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
    login: (userDetails, navigate) => dispatch(login(userDetails, navigate)),
    register: (userDetails, navigate) => dispatch(register(userDetails, navigate)),
  };
};
