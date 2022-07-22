import React from 'react';

import { styled } from '@mui/system';

import WelcomeMessage from './WelcomeMessage';
import MessengerContent from './MessengerContent';

import { connect } from 'react-redux';
// import getActions from '../../../store/actions/chatActions';

const MainContainer = styled('div')({
  flexGrow: 1,
  backgroundColor: '#36393f',
  marginTop: '48px',
  display: 'flex',
});

const Messenger = ({ chatType, chosenChatDetails, chatMessages }) => {
  return (
    <MainContainer>
      {!chosenChatDetails ? (
        <WelcomeMessage />
      ) : (
        <MessengerContent chosenChatDetails={chosenChatDetails} />
      )}
    </MainContainer>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    ...state.chat,
  };
};

// const mapActionsToProps = (dispatch) => {
//   return {
//     ...getActions(dispatch),
//   };
// };

export default connect(mapStoreStateToProps, null)(Messenger);
