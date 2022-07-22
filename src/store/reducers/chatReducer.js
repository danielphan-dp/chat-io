import chatActions from '../actions/alertActions';

const initialState = {
  chatType: null,
  chatDetails: null,
  chatMessages: [],
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case chatActions.SET_CHOSEN_CHAT_DETAILS:
      return {
        ...state,
      };
    case chatActions.SET_MESSAGES:
      return {
        ...state,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
