import React from 'react';
import { IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
import * as VideoChatRoomService from '../../../../services/RealtimeCommunication/VideoChatRoom.service';

const CloseRoomButton = () => {
  return (
    <IconButton
      style={{
        color: 'white',
      }}
      onClick={() => VideoChatRoomService.leaveRoom()}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseRoomButton;
