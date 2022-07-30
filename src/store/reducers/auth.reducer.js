import { AuthActions } from '../actions.types/auth.actions.types';

const initialState = {
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthActions.SET_USER_DETAILS:
      const { userDetails } = payload;
      return {
        ...state,
        userDetails: userDetails,
      };
    default:
      return state;
  }
};

export default reducer;
