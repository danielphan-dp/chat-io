import React from 'react';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { ChatTypes, getActions } from '../../../../store/actions/chat.actions';
import Avatar from '../../../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';

const FriendsListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails(ChatTypes.DIRECT, { id: id, name: username });
  };
  return (
    <Button
      onClick={handleChooseActiveConversation}
      style={{
        width: '100%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'flex-start',
        textTransform: 'none',
        color: 'black',
        position: 'relative',
      }}
    >
      <Avatar username={username} />
      <Typography
        style={{
          marginLeft: '7px',
          fontWeight: 700,
          color: '#8e9297',
        }}
        variant="subtitle1"
        align="left"
      >
        {username}
      </Typography>
      {isOnline && <OnlineIndicator />}
    </Button>
  );
};

const mapStoreStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStoreStateToProps,
  mapDispatchToProps
)(FriendsListItem);
