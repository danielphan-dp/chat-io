import { AlertActions } from './alert.actions.types';

export const openAlertMessage = (content) => {
  return {
    type: AlertActions.OPEN_ALERT_MESSAGE,
    payload: {
      content,
    },
  };
};

export const closeAlertMessage = () => {
  return {
    type: AlertActions.CLOSE_ALERT_MESSAGE,
    payload: {
      content: null,
    },
  };
};

// prettier-ignore
export const getActions = (dispatch) => {
  return {
    openAlertMessage: (content) => dispatch(openAlertMessage(content)),
    closeAlertMessage: () => dispatch(closeAlertMessage()),
  };
};
