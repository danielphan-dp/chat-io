import React from 'react';
import { styled } from '@mui/system';
import MainPageButton from './MainPageButton';

const Wrapper = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#202225',
});

const SideBar = () => {
  return (
    <Wrapper>
      <MainPageButton />
    </Wrapper>
  );
};

export default SideBar;
