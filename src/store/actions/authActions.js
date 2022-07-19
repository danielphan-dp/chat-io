import * as authApi from '../../networking/api/authApi';

export const authActions = {
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

const login = (userDetails, history) => {
  return async (dispatch) => {
    const response = await authApi.login(userDetails);
    if (response.error) {
      // TODO: show error message in alert
    } else {
      const { userDetails } = response.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history.push('/dashboard');
    }
  };
};

const register = (userDetails, history) => {
  return async (dispatch) => {
    const response = await authApi.register(userDetails);
    if (response.error) {
      // TODO: show error message in alert
    } else {
      const { userDetails } = response.data;
      localStorage.setItem('user', JSON.stringify(userDetails));
      dispatch(setUserDetails(userDetails));
      history.push('/dashboard');
    }
  };
};

export const getActions = (dispatch) => {
  return {
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};
