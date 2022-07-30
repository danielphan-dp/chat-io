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
            ? 'Username should contains between 3 and 12 characters and password should contains between 6 and 12 character. Also correct e-mail address should be provided.'
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
