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

const login = (userDetails, navigate) => {
  return async (dispatch) => {
    const response = await authApi.login(userDetails);

    // TODO: remove log when finished testing
    console.log(response);

    if (response.error) {
      // TODO: show error message in alert
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
      // TODO: show error message in alert
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
    login: (userDetails, history) => dispatch(login(userDetails, history)),
    register: (userDetails, history) =>
      dispatch(register(userDetails, history)),
  };
};
