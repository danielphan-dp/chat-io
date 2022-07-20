import authActions from '../actions/authActions';

const initialState = {
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case authActions.SET_USER_DETAILS:
      const { userDetails } = payload;
      return {
        ...state,
        userDetails: userDetails,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
