import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { getDirectChatHistory } from '../../../networking/realtime-communication/socketConnection';
import Messages from './Messages/Messages';
import NewMessageInput from './Messages/NewMessageInput';

const Wrapper = styled('div')({
  flexGrow: 1,
});

const MessengerContent = ({ chosenChatDetails }) => {
  useEffect(() => {
    getDirectChatHistory({
      receiverUserId: chosenChatDetails.id,
    });
  }, [chosenChatDetails]);

  return (
    <Wrapper>
      <Messages />
      <NewMessageInput />
    </Wrapper>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

const mapDispatchToProps = null;

// prettier-ignore
export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(MessengerContent);
