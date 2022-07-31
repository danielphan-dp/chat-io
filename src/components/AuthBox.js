import React from 'react';
import { styled } from '@mui/system';
import { Box } from '@mui/material';

const Wrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#5865F2',
});

const AuthBox = ({ children }) => {
  return (
    <Wrapper>
      <Box
        sx={{
          width: 700,
          height: 400,
          bgcolor: '#36393F',
          borderRadius: '5px',
          boxShadow: '0 2px 10px 0 rgb(0, 0, 0 / 20%)',
          display: 'flex',
          flexDirection: 'column',
          padding: '25px',
        }}
      >
        {children}
      </Box>
    </Wrapper>
  );
};

export default AuthBox;
