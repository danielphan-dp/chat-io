import { AlertActions } from './alert.actions.types';

const initialState = {
  showAlertMessage: false,
  alertMessageContent: null,
};

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AlertActions.OPEN_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: true,
        alertMessageContent: payload.alertMessageContent,
      };
    case AlertActions.CLOSE_ALERT_MESSAGE:
      return {
        ...state,
        showAlertMessage: false,
        alertMessageContent: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
