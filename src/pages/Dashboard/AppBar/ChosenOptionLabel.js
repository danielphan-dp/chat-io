import React from 'react';
import { Typography } from '@mui/material';

import { connect } from 'react-redux';
import getActions from '../../../store/actions/chatActions';

const ChosenOptionLabel = ({ name }) => {
  return (
    <Typography sx={{ fontSize: '16px', color: 'white', fontWeight: 'bold' }}>
      {`${name ? `User(s): ${name}` : ''}`}
    </Typography>
  );
};

const mapStoreStateToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};

// const mapActionsToProps = (dispatch) => {
//   return {
//     ...getActions(dispatch),
//   };
// };

export default connect(mapStoreStateToProps, null)(ChosenOptionLabel);
