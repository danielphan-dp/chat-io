import React from 'react';
import { Tooltip, Button } from '@mui/material';
import { Cast as CastIcon, CastConnected as CastConnectedIcon } from '@mui/icons-material';
import * as VideoChatRoomService from '../../../services/realtime-communication/VideoChatRoom.service';

const ActiveRoomButton = ({ key, roomId, creatorUsername, numberOfParticipants, isUserInRoom }) => {
  return (
    <Tooltip title={`Creator: ${creatorUsername}. Connected: ${numberOfParticipants}`}>
      <div>
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
          disabled={numberOfParticipants >= 4 || isUserInRoom}
          onClick={() => numberOfParticipants < 4 && VideoChatRoomService.joinRoom(roomId)}
        >
          {isUserInRoom ? <CastConnectedIcon /> : <CastIcon />}
        </Button>
      </div>
    </Tooltip>
  );
};

export default ActiveRoomButton;
