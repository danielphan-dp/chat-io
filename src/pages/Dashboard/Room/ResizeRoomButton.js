import React from 'react';
import { styled } from '@mui/system';
import { IconButton } from '@mui/material';
import CloseFullScreenIcon from '@mui/icons-material/CloseFullscreen';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const Wrapper = styled('div')({
  position: 'absolute',
  bottom: '10px',
  right: '10px',
});

const ResizeRoomButton = ({ isRoomMinimized, handleRoomResize }) => {
  return (
    <Wrapper>
      <IconButton style={{ color: 'white' }} onClick={handleRoomResize}>
        {isRoomMinimized ? <OpenInFullIcon /> : <CloseFullScreenIcon />}
      </IconButton>
    </Wrapper>
  );
};

export default ResizeRoomButton;
