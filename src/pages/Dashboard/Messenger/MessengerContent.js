import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import Messages from './Messages/Messages';
import NewMessageInput from './Messages/NewMessageInput';
import { connect } from 'react-redux';
import { getDirectChatHistory } from '../../../networking/realtime-communication/socketConnection';

const MainContainer = styled('div')({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <MainContainer>
      <Messages />
      <NewMessageInput />
    </MainContainer>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

const mapActionsToProps = null;

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(MessengerContent);
