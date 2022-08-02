import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Videocam as VideocamIcon, VideocamOff as VideocamOffIcon } from '@mui/icons-material';

const CameraButton = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);
  return (
    <IconButton onClick={() => setCameraEnabled(!cameraEnabled)}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
