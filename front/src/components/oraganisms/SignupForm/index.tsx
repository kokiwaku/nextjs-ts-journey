'use client';

import CommonButton from '@/components/atoms/CommonButton';
import InputFormWithLabel from '@/components/molecules/InputFormWithLabel';
import styled from 'styled-components';
import { useSignupForm } from './useSignupForm';

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;

  div {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    label {
      width: 5rem;
    }
  }
`;
const SignupForm: React.FC = () => {
  const [
    { email, password, isAbleToSubmit },
    { handleSubmit, handleSetEmail, handleSetPassword },
  ] = useSignupForm();

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <InputFormWithLabel
          type="text"
          id="email"
          value={email}
          onChange={handleSetEmail}
        />
      </div>
      <div>
        <InputFormWithLabel
          type="password"
          id="password"
          value={password}
          onChange={handleSetPassword}
        />
      </div>
      <div>
        <CommonButton
          title="Sign up"
          type="submit"
          disabled={!isAbleToSubmit}
        />
      </div>
    </StyledForm>
  );
};

export default SignupForm;
