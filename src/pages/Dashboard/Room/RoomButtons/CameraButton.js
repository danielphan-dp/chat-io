import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Videocam as VideocamIcon, VideocamOff as VideocamOffIcon } from '@mui/icons-material';

const CameraButton = ({ localStream }) => {
  const [cameraEnabled, setCameraEnabled] = useState(true);

  const onClickHandler = () => {
    localStream.getVideoTracks()[0].enabled = !cameraEnabled;
    setCameraEnabled(!cameraEnabled);
  };

  return (
    // prettier-ignore
    <IconButton onClick={onClickHandler}>
      {cameraEnabled ? <VideocamIcon /> : <VideocamOffIcon />}
    </IconButton>
  );
};

export default CameraButton;
