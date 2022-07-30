import React, { useState, useEffect } from 'react';
import { validateMail } from '../../../services/validate.service';
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

  const handleSendInvitation = () => {
    sendFriendInvitation({ targetMailAddress: mail }, handleCloseDialog);
  };

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
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography>Enter e-mail of the user you want to invite!</Typography>
          </DialogContentText>
          <InputWithLabel
            label="Mail"
            type="text"
            value={mail}
            setValue={setMail}
            placeholder="Enter mail address"
          />
        </DialogContent>
        <DialogActions>
          <CustomPrimaryButton
            onClick={handleSendInvitation}
            disabled={!isFormValid}
            label="Send"
            additionalStyles={{
              marginLeft: '15px',
              marginRight: '15px',
              marginBottom: '10px',
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
