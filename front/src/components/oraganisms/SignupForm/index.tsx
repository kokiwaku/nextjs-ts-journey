'use client';

import { FormEvent, useState } from 'react';
import { redirect } from 'next/navigation';
import CommonButton from '@/components/atoms/CommonButton';
import InputFormWithLabel from '@/components/molecules/InputFormWithLabel';
import styled from 'styled-components';
import { signUp } from '@/app/apis/authApi';

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
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const isAbleToSubmit = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const response = await signUp(email, password);
    if (response.code !== 200) {
      console.error(response.message);
      return;
    }

    // 認証OK
    redirect('/');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <InputFormWithLabel
          type="text"
          id="email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
      </div>
      <div>
        <InputFormWithLabel
          type="password"
          id="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
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
