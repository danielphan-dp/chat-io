import { AuthActions } from './auth.actions.types';
import * as AuthApi from 'src/services/api/AuthApi.service';
import { openAlertMessage } from '../alert/alert.actions';

export const setUserDetails = (userDetails) => {
  return {
    type: AuthActions.SET_USER_DETAILS,
    payload: {
      userDetails,
    },
  };
};

export const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await AuthApi.login(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
    } else {
      const { userDetails } = response?.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      navigate('/dashboard');
    }
  };
};

export const register = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await AuthApi.register(userDetails);
    if (response.error) {
      dispatch(openAlertMessage(response?.exception?.response?.data));
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
