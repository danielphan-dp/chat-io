import React from 'react';
import { styled, Typography } from '@mui/material';

const RedirectText = styled('span')({
  color: '#00AFF4',
  fontWeight: 500,
  cursor: 'pointer',
});

const RedirectInfo = ({ text, redirectText, redirectHandler, additionalStyles }) => {
  return (
    <Typography
      sx={{ color: '#72767d' }}
      style={additionalStyles ? additionalStyles : {}}
      variant="subtitle2"
    >
      {text}
      <RedirectText onClick={redirectHandler}>{redirectText}</RedirectText>
    </Typography>
  );
};

export default RedirectInfo;
