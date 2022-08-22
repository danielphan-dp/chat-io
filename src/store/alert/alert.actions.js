import { AlertActions } from './alert.actions.types';

export const openAlertMessage = (alertMessageContent) => {
  return {
    type: AlertActions.OPEN_ALERT_MESSAGE,
    payload: {
      alertMessageContent,
    },
  };
};

export const closeAlertMessage = () => {
  return {
    type: AlertActions.CLOSE_ALERT_MESSAGE,
    payload: {},
  };
};

// prettier-ignore
export const getActions = (dispatch) => {
  return {
    openAlertMessage: (alertMessageContent) => dispatch(openAlertMessage(alertMessageContent)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};
