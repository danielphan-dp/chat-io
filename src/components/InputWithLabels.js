import React from 'react';
import { styled } from '@mui/system';

const InputWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  width: '100%',
});

const InputLabel = styled('p')({
  color: '#b9bbbe',
  textTransform: 'uppercase',
  fontWeight: '600',
  fontSize: '16px',
});

const InputCell = styled('input')({
  flexGrow: 1,
  height: '40px',
  border: '1px solid black',
  borderRadius: '5px',
  color: '#dcddde',
  background: '#35393f',
  margin: 0,
  fontSize: '16px',
  padding: '0 5px',
});

const InputWithLabels = ({ type, label, valueHook: { value, setValue }, placeholder }) => {
  return (
    <InputWrapper>
      <InputLabel>{label}</InputLabel>
      <InputCell
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </InputWrapper>
  );
};

export default InputWithLabels;
