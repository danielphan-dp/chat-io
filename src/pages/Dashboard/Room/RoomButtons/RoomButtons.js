import React from 'react';
import { styled } from '@mui/system';
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CloseRoomButton from './CloseRoomButton';
import CameraButton from './CameraButton';

const Wrapper = styled('div')({
  width: '100%',
  // maxHeight: '100px',
  backgroundColor: '#5865f2',
  // borderTopLeftRadius: '5px',
  // borderTopRightRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const fullScreenRoomStyle = {
  height: '8%',
};

const minimizedRoomStyle = {
  height: '15%',
};

const RoomButtons = ({ isRoomMinimized }) => {
  return (
    <Wrapper style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <ScreenShareButton />
      <MicButton />
      <CameraButton />
      <CloseRoomButton />
    </Wrapper>
  );
};

export default RoomButtons;
