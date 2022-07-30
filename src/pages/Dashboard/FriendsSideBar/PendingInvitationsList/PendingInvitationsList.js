import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import PendingInvitationsListItem from './PendingInvitationsListItem';

const Wrapper = styled('div')({
  width: '100%',
  height: '22%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'auto',
});

const PendingInvitationsList = ({ pendingFriendsInvitations }) => {
  return (
    <Wrapper>
      {pendingFriendsInvitations.map(({ _id, senderId: { username, mail } }) => (
        <PendingInvitationsListItem key={_id} id={_id} username={username} mail={mail} />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ friends }) => {
  return {
    ...friends,
  };
};

const mapDispatchToProps = null;

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PendingInvitationsList);
