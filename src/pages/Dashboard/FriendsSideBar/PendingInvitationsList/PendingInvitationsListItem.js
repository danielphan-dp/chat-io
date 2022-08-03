import React, { useState } from 'react';
import { getActions } from '../../../../store/friends/friends.actions';
import { connect } from 'react-redux';
import { Tooltip, Typography, Box } from '@mui/material';
import Avatar from '../../../../components/Avatar';
import InvitationDecisionButtons from './InvitationDecisionButtons';

const PendingInvitationsListItem = ({
  id,
  username,
  mail,
  acceptFriendInvitation = () => {},
  rejectFriendInvitation = () => {},
}) => {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  return (
    <Tooltip title={mail}>
      <div style={{ width: '100%' }}>
        <Box
          sx={{
            width: '100%',
            height: '42px',
            marginTop: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Avatar username={username} />
          <Typography
            sx={{
              marginLeft: '7px',
              fontWeight: 700,
              color: '#8e9297',
              flexGrow: 1,
            }}
            variant="subtitle1"
          >
            {username}
          </Typography>
          <InvitationDecisionButtons
            disabled={buttonDisabled}
            acceptInvitationHandler={() => {
              acceptFriendInvitation({ id });
              setButtonDisabled(true);
            }}
            rejectInvitationHandler={() => {
              rejectFriendInvitation({ id });
              setButtonDisabled(true);
            }}
          />
        </Box>
      </div>
    </Tooltip>
  );
};

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingInvitationsListItem);
