import React from 'react';
import { connect } from 'react-redux';
import { getActions } from '../store/actions/alert.actions';
import { Alert, Snackbar } from '@mui/material';

const AlertNotification = ({ showAlertMessage, closeAlertMessage, alertMessageContent }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={showAlertMessage}
      onClose={closeAlertMessage}
      autoHideDuration={6000}
    >
      <Alert severity="info">{alertMessageContent}</Alert>
    </Snackbar>
  );
};

const mapStoreStateToProps = ({ alert }) => {
  return {
    ...alert,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(AlertNotification);
