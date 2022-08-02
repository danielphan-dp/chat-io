import React from 'react';
import { styled } from '@mui/system';
import AddFriendButton from './AddFriendButton';
import FriendsList from './FriendsList/FriendsList';
import FriendsTitle from './FriendsTitle';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';

const Wrapper = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2F3136',
});

const FriendsSideBar = () => {
  return (
    <Wrapper>
      <AddFriendButton />
      <FriendsTitle title="Private Conversations" />
      <FriendsList />
      <FriendsTitle title="Friend Requests" />
      <PendingInvitationsList />
    </Wrapper>
  );
};

export default FriendsSideBar;
