import React from 'react';
import Button from '@mui/material/Button';

const CustomPrimaryButton = ({ additionalStyles, label, disabled, onClick }) => {
  return (
    <Button
      style={additionalStyles ? additionalStyles : {}}
      variant="contained"
      sx={{
        bgcolor: '#5865F2',
        color: 'white',
        textTransform: 'none',
        fontSize: '16px',
        fontWeight: '500',
        width: '100%',
        height: '40px',
      }}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
