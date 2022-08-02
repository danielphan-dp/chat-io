import React, { useEffect, useRef } from 'react';
import { styled } from '@mui/system';

const Wrapper = styled('div')({
  height: '50%',
  width: '50%',
  backgroundColor: 'black',
  borderRadius: '5px',
});

const VideoElement = styled('video')({
  width: '100%',
  height: '100%',
});

const Video = ({ stream, isLocalStream }) => {
  const videoRef = useRef();
  useEffect(() => {
    const video = videoRef.current;
    video.srcObject = stream;
    video.onloadedmetadata = () => {
      video.play();
    };
  }, [stream]);
  return (
    <Wrapper>
      <VideoElement ref={videoRef} autoPlay muted={isLocalStream ? true : false} />
    </Wrapper>
  );
};

export default Video;
