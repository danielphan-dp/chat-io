import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tooltip } from '@mui/material';
import CustomPrimaryButton from '../../../components/CustomPrimaryButton';
import RedirectInfo from '../../../components/RedirectInfo';

const RegisterPageFooter = ({ handleRegister, isFormValid }) => {
  const navigate = useNavigate();
  return (
    <>
      <Tooltip
        title={
          !isFormValid
            ? 'Valid e-mail, username (6-20 characters) and password (6-20 characters) required.'
            : 'Press to register!'
        }
      >
        <div>
          <CustomPrimaryButton
            label="REGISTER"
            additionalStyles={{ marginTop: '30px' }}
            disabled={!isFormValid}
            onClick={handleRegister}
          />
        </div>
      </Tooltip>
      <RedirectInfo
        additionalStyles={{ marginTop: '5px' }}
        text=""
        redirectText="Already have an account?"
        redirectHandler={() => navigate('/login')}
      />
    </>
  );
};

export default RegisterPageFooter;
