import React from 'react';
import { styled } from '@mui/system';
import ScreenShareButton from './ScreenShareButton';
import MicButton from './MicButton';
import CameraButton from './CameraButton';
import CloseRoomButton from './CloseRoomButton';
import { connect } from 'react-redux';
import { getActions } from 'src/store/room/room.actions';

const Wrapper = styled('div')({
  width: '100%',
  backgroundColor: '#5865f2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const RoomButtons = (props) => {
  const { isRoomMinimized, localStream, isUserJoinedWithOnlyAudio } = props;
  return (
    <Wrapper style={{ height: isRoomMinimized ? '15%' : '8%' }}>
      {!isUserJoinedWithOnlyAudio && <ScreenShareButton {...props} />}
      <MicButton localStream={localStream} />
      {!isUserJoinedWithOnlyAudio && <CameraButton localStream={localStream} />}
      <CloseRoomButton />
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RoomButtons);
