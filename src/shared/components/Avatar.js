import React from 'react';
import { styled } from '@mui/system';

const AvatarPreview = styled('div')({
  height: '42px',
  width: '42px',
  backgroundColor: '#5865f2',
  borderRadius: '5px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: '700',
  marginLeft: '5px',
  color: 'white',
});

const Avatar = ({ username, large }) => {
  return (
    <AvatarPreview style={large ? { height: '80px', width: '80px' } : {}}>
      {username.substring(0, 1).toUpperCase()}
    </AvatarPreview>
  );
};

export default Avatar;
