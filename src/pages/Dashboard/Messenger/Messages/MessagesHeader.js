import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';
import Avatar from '../../../../components/Avatar';

const Wrapper = styled('div')({
  width: '98%',
  display: 'column',
  marginTop: '10px',
});

const MessagesHeader = ({ name = '' }) => {
  return (
    <Wrapper>
      <Avatar large username={name} />
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          color: 'white',
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '1rem',
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
        This is the beginning of the conversation.
      </Typography>
    </Wrapper>
  );
};

const mapStoreStateToProps = null;

const mapActionsToProps = null;

// prettier-ignore
export default connect(
  mapStoreStateToProps,
  mapActionsToProps
)(MessagesHeader);
