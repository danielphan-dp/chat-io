import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import { Mic as MicIcon, MicOff as MicOffIcon } from '@mui/icons-material';

const MicButton = () => {
  const [micEnabled, setMicEnabled] = useState(false);
  return (
    <IconButton onClick={() => setMicEnabled(!micEnabled)}>
      {micEnabled ? <MicIcon /> : <MicOffIcon />}
    </IconButton>
  );
};

export default MicButton;
