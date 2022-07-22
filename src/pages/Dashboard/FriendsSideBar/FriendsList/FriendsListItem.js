import React from 'react';

// GUI JSX Components
// Material UI
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';

// Custom
import Avatar from '../../../../shared/components/Avatar';
import OnlineIndicator from './OnlineIndicator';

// Redux Store Access
import { connect } from 'react-redux';
import { chatTypes, getActions } from '../../../../store/actions/chatActions';

const FriendsListItem = ({ id, username, isOnline, setChosenChatDetails }) => {
  const handleChooseActiveConversation = () => {
    setChosenChatDetails(chatTypes.DIRECT, { id: id, name: username });
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

const mapActionsToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(FriendsListItem);
