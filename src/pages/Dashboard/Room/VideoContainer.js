import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import Video from './Video';

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

const fullScreenRoomStyle = {
  height: '92%',
};

const minimizedRoomStyle = {
  height: '85%',
};

const VideoContainer = ({ isRoomMinimized, localStream, isLocalStream }) => {
  return (
    <Wrapper style={isRoomMinimized ? minimizedRoomStyle : fullScreenRoomStyle}>
      <Video stream={localStream} isLocalStream />
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStateToProps, null)(VideoContainer);
