import React, { useState } from 'react';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import AddFriendDialog from './AddFriendDialog';

const additionalStyles = {
  height: '30px',
  width: '90%',
  marginTop: '10px',
  background: '#3ba55d',
};

const AddFriendButton = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <CustomPrimaryButton
        additionalStyles={additionalStyles}
        label={'Add Friend'}
        onClick={() => setIsDialogOpen(true)}
      />
      <AddFriendDialog
        isDialogOpen={isDialogOpen}
        closeDialogHandler={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default AddFriendButton;
