import { AuthActions } from './auth.actions.types';

const initialState = {
  userDetails: null,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: payload.userDetails,
      };
    default:
      return state;
  }
};

export default authReducer;
