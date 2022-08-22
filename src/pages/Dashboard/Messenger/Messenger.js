import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';

const Wrapper = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display: 'flex',
});

const Messenger = ({ chosenChatDetails }) => {
  return (
    <Wrapper>
      {!chosenChatDetails ? <WelcomeMessage /> : <MessengerContent {...{ chosenChatDetails }} />}
    </Wrapper>
  );
};

const mapStateToProps = ({ chat }) => {
  return {
    ...chat,
  };
};

const mapDispatchToProps = null;

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messenger);
