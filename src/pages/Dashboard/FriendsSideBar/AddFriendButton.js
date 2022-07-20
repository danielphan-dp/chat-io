import React, { useState } from 'react';
import CustomPrimaryButton from '../../../shared/components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  marginTop: '10px',
  // marginLeft: '5px',
  width: '90%',
  height: '30px',
  background: '#3ba55d',
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenAddFriendDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseAddFriendDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <React.Fragment>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label="Add Friend"
        onClick={handleOpenAddFriendDialog}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={handleCloseAddFriendDialog}
      />
    </React.Fragment>
  );
};

export default AddFriendButton;
