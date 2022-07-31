import React, { useState } from 'react';
import { styled } from '@mui/system';
import ResizeRoomButton from './ResizeRoomButton';

const Wrapper = styled('div')({
  position: 'absolute',
  border: '5px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#202225',
});

const fullScreenRoomStyle = {
  width: '100%',
  height: '100vh',
  'z-index': '1000',
};

const minimizedRoomStyle = {
  bottom: '0px',
  right: '0px',
  // width: '30%',
  // height: '40vh',
  width: '680px',
  height: '400px',
  'border-radius': '5px',
};

const Room = () => {
  const [isRoomMinimized, setIsRoomMinimized] = useState(true);

  const roomResizeHandler = () => {
    setIsRoomMinimized(!isRoomMinimized);
  };

  return (
    <Wrapper style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <ResizeRoomButton isRoomMinimized={isRoomMinimized} handleRoomResize={roomResizeHandler} />
    </Wrapper>
  );
};

export default Room;
