import React, { useEffect } from 'react';
import { connectWithSocketServer } from '../../networking/realtime-communication/socketConnection';
import { logout } from '../../shared/utils/auth';
import { connect } from 'react-redux';
import { getActions } from '../../store/actions/auth.actions';
import { styled } from '@mui/system';
import AppBar from './AppBar/AppBar';
import SideBar from './SideBar/SideBar';
import FriendsSideBar from './FriendsSideBar/FriendsSideBar';
import Messenger from './Messenger/Messenger';

const DashboardWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem('user');
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
      connectWithSocketServer(JSON.parse(userDetails));
    }
  }, []);
  return (
    <DashboardWrapper>
      <SideBar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </DashboardWrapper>
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
  mapDispatchToProps,
)(Dashboard);
