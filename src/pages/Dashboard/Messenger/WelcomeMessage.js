import React from 'react';

import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const MainContainer = styled('div')({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const WelcomeMessage = () => {
  return (
    <MainContainer variant="h6" sx={{ color: 'white' }}>
      <Typography>Welcome! Thank you for using our services!</Typography>
    </MainContainer>
  );
};

export default WelcomeMessage;
