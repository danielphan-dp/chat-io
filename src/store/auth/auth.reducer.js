import { AuthActions } from './auth.actions.types';

const initialState = {
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { userDetails } = payload || {};
  switch (type) {
    case AuthActions.SET_USER_DETAILS:
      return {
        ...state,
        userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
