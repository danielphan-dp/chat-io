import React from 'react';
import { styled } from '@mui/system';
import Video from './Video';
import { connect } from 'react-redux';

const Wrapper = styled('div')({
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
});

const VideoContainer = ({
  localStream,
  isLocalStream,
  remoteStreams,
  screenSharingStream,
  isRoomMinimized,
}) => {
  return (
    <Wrapper style={{ height: isRoomMinimized ? '85%' : '92%' }}>
      <Video
        {...{
          key: localStream.id,
          stream: screenSharingStream ? screenSharingStream : localStream,
          isLocalStream: isLocalStream,
        }}
      />
      {remoteStreams.map((remoteStream) => (
        <Video {...{ key: remoteStream.id, stream: remoteStream, isLocalStream: !isLocalStream }} />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapDispatchToProps = null;

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoContainer);
