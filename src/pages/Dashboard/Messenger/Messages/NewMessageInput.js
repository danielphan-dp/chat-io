import React, { useState } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import * as SocketConnectionService from '../../../../services/realtime-communication/SocketConnection.service';

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

  const handleSendMessage = () => {
    SocketConnectionService.sendDirectMessage({
      receiverUserId: chosenChatDetails.id,
      content: message,
    });
    setMessage('');
  };

  return (
    <Wrapper>
      <Input
        value={message}
        placeholder={'Type a message'}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && message.length > 0 && handleSendMessage()}
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
