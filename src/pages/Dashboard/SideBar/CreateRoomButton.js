import React from 'react';
import * as VideoChatRoomService from '../../../services/realtime-communication/VideoChatRoom.service';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateRoomButton = ({ isUserInRoom }) => {
  return (
    <Button
      style={{
        width: '48px',
        height: '48px',
        borderRadius: '5px',
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: '10px',
        color: 'white',
        backgroundColor: '#5865F2',
      }}
      disabled={isUserInRoom}
      onClick={() => VideoChatRoomService.createNewRoom()}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateRoomButton;
