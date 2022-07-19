const initialState = {
  userDetails: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DUMMY':
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
