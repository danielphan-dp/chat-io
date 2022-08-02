import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import {
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
} from '@mui/icons-material';

const ScreenShareButton = () => {
  const [screenShareEnabled, setScreenShareEnabled] = useState(false);
  return (
    <IconButton onClick={() => setScreenShareEnabled(!screenShareEnabled)}>
      {screenShareEnabled ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
