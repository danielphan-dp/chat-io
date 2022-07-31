import React, { useState, useEffect } from 'react';
import { validateMail } from '../../../services/Validate.services/InputValidate.service';
import { connect } from 'react-redux';
import { getActions } from '../../../store/actions/friends.actions';

import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import InputWithLabel from '../../../components/InputWithLabels';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';

const AddFriendDialog = ({ isDialogOpen, closeDialogHandler, sendFriendInvitation = () => {} }) => {
  const [mail, setMail] = useState('');
  const [isFormValid, setIsFormValid] = useState('');

  useEffect(() => {
    setIsFormValid(validateMail(mail));
  }, [mail, setIsFormValid]);

  const handleCloseDialog = () => {
    closeDialogHandler();
    setMail('');
  };

  return (
    <div>
      <Dialog open={isDialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>
          <Typography>
            <h2>Invite a Friend</h2>
          </Typography>
          <DialogContentText>
            <Typography>Enter e-mail of the user you want to invite!</Typography>
          </DialogContentText>
        </DialogTitle>
        <DialogContent>
          <InputWithLabel
            type="text"
            label="E-Mail Address"
            placeholder="example@domain.com"
            valueHook={{ value: mail, setValue: setMail }}
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            label="Send"
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '15px',
            }}
            disabled={!isFormValid}
            onClick={() => {
              sendFriendInvitation({ targetMailAddress: mail }, handleCloseDialog);
            }}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriendDialog);
