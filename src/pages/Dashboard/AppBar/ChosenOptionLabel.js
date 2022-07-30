import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import getActions from '../../../store/actions/chat.actions';

const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}>
      {`${name ? `User(s): ${name}` : ''}`}
    </Typography>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
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
  mapDispatchToProps
)(ChosenOptionLabel);
