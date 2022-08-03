import React, { useEffect } from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import { getActions } from '../../store/auth/auth.actions';
import * as SocketConnectionService from '../../services/RealtimeCommunication/SocketConnection.service';
import * as AuthService from '../../services/Auth/Auth.service';
import AppBar from './AppBar/AppBar';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';
import Room from './Room/Room';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  minWidth: '1000px',
});

const Dashboard = ({ isUserInRoom, setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      AuthService.logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      SocketConnectionService.connectWithSocketServer(JSON.parse(userDetails));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      {isUserInRoom && <Room />}
      <AppBar />
    </Wrapper>
  );
};

const mapStateToProps = ({ room }) => {
  return {
    ...room,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    ...getActions(dispatch),
  };
};

// prettier-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
