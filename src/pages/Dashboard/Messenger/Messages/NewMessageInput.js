import React, { useState } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { sendDirectMessage } from '../../../../networking/realtime-communication/socketConnection';

const Wrapper = styled('div')({
  height: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Input = styled('input')({
  backgroundColor: '#2f3136',
  width: '90%',
  height: '44px',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontSize: '14px',
  padding: '0 10px',
});

const NewMessageInput = ({ chosenChatDetails }) => {
  const [message, setMessage] = useState('');
  const handleMessageValueChange = (event) => {
    setMessage(event.target.value);
  };
  const handleKeyPressed = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };
  const handleSendMessage = () => {
    if (message.length > 0) {
      sendDirectMessage({
        receiverUserId: chosenChatDetails.id,
        content: message,
      });
      setMessage('');
    }
  };
  return (
    <Wrapper>
      <Input
        value={message}
        placeholder={`Write message to ${chosenChatDetails.name}`}
        onChange={handleMessageValueChange}
        onKeyDown={handleKeyPressed}
      />
    </Wrapper>
  );
};

const mapStoreStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

const mapActionsToProps = null;

// prettier-ignore
export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(NewMessageInput);
