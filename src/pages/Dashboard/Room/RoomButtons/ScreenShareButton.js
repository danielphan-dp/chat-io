import React from 'react';
import { IconButton } from '@mui/material';
import {
  ScreenShare as ScreenShareIcon,
  StopScreenShare as StopScreenShareIcon,
} from '@mui/icons-material';
import * as WebRTCService from 'src/services/realtime-communication/WebRTC.service';

const constraints = {
  audio: false,
  video: true,
};

const ScreenShareButton = ({
  localStream,
  isScreenSharingActive,
  screenSharingStream,
  setScreenSharingStream,
}) => {
  const onClickHandler = async () => {
    if (!isScreenSharingActive) {
      let stream = null;
      try {
        stream = await navigator.mediaDevices.getDisplayMedia(constraints);
      } catch (err) {
        alert('Error when accessing screen sharing functionality.');
      }
      if (stream) {
        setScreenSharingStream(stream);
        console.log('onclick handler ------');
        WebRTCService.switchOutgoingTracks(stream);
      }
    } else {
      WebRTCService.switchOutgoingTracks(localStream);
      screenSharingStream.getTracks().forEach((track) => track.stop());
      setScreenSharingStream(null);
    }
  };

  return (
    <IconButton style={{ color: 'white' }} onClick={onClickHandler}>
      {isScreenSharingActive ? <ScreenShareIcon /> : <StopScreenShareIcon />}
    </IconButton>
  );
};

export default ScreenShareButton;
