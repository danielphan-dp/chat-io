import React from 'react';
import { Box, IconButton } from '@mui/material/';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const InvitationDecisionButtons = ({
  acceptInvitationHandler,
  rejectInvitationHandler,
  disabled,
}) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <IconButton style={{ color: 'white' }} disabled={disabled} onClick={acceptInvitationHandler}>
        <CheckIcon />
      </IconButton>
      <IconButton style={{ color: 'white' }} disabled={disabled} onClick={rejectInvitationHandler}>
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default InvitationDecisionButtons;
