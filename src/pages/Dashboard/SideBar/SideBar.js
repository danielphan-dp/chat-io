import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import MainPageButton from './MainPageButton';
import CreateRoomButton from './CreateRoomButton';
import ActiveRoomButton from './ActiveRoomButton';

const Wrapper = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});

const SideBar = ({ activeRooms, isUserInRoom }) => {
  return (
    <Wrapper>
      <MainPageButton />
      <CreateRoomButton />

      {activeRooms.map(({ roomId, creatorUsername, participants }) => (
        <ActiveRoomButton
          key={roomId}
          numberOfParticipants={participants.length}
          {...{ roomId, creatorUsername, isUserInRoom }}
        />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

export default connect(mapStateToProps)(SideBar);
