import React from 'react';
import { connect } from 'react-redux';
import { styled } from '@mui/system';
import FriendsListItem from './FriendsListItem';

const Wrapper = styled('div')({
  flexGrow: 1,
  width: '100%',
});

const checkOnlineUsers = (friends = [], onlineUsers = []) => {
  friends.forEach((friend) => {
    friend.isOnline = onlineUsers.find((user) => user.userId === friend.id);
  });
  return friends;
};

const FriendsList = ({ friends, onlineUsers }) => {
  return (
    <Wrapper>
      {checkOnlineUsers(friends, onlineUsers).map(({ id, username, isOnline }) => (
        <FriendsListItem {...{ key: id, id, username, isOnline }} />
      ))}
    </Wrapper>
  );
};

const mapStateToProps = ({ friends }) => {
  return { ...friends };
};

const mapDispatchToProps = null;

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendsList);
