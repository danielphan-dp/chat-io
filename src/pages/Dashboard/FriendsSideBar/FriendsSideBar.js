import React from 'react';
import { styled } from '@mui/system';

import AddFriendButton from './AddFriendButton';
import FriendsList from './FriendsList/FriendsList';
import FriendsTitle from './FriendsTitle';
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList';

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2F3136',
});

const FriendsSideBar = () => {
  return (
    <MainContainer>
      <AddFriendButton />
      <FriendsTitle title="Private Messages" />
      <FriendsList />
      <FriendsTitle title="Invitations" />
      <PendingInvitationsList />
    </MainContainer>
  );
};

export default FriendsSideBar;
