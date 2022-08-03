import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Mic as MicIcon, MicOff as MicOffIcon } from '@mui/icons-material';

const MicButton = ({ localStream }) => {
  const [micEnabled, setMicEnabled] = useState(false);

  const onClickHandler = () => {
    localStream.getAudioTracks()[0].enabled = !micEnabled;
    setMicEnabled(!micEnabled);
  };

  return (
    // prettier-ignore
    <IconButton onClick={onClickHandler}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
