import React from 'react';

import { styled } from '@mui/system';

import Avatar from '../../../../shared/components/Avatar';
import { Typography } from '@mui/material';

import { connect } from 'react-redux';

const MainContainer = styled('div')({
  width: '98%',
  display: 'column',
  marginTop: '10px',
});

const MessagesHeader = ({ name = '' }) => {
  return (
    <MainContainer>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      >
        {name}
      </Typography>
      <Typography
        sx={{
          color: '#b9bbbe',
          marginLeft: '5px',
          marginRight: '5px',
        }}
      >
        This is the beginning of your conversation with {name}.
      </Typography>
    </MainContainer>
  );
};

const mapStoreStateToProps = null;
const mapActionsToProps = null;

export default connect(mapStoreStateToProps, mapActionsToProps)(MessagesHeader);
