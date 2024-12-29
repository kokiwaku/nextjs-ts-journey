'use client';

import { FormEvent, useState } from 'react';
import { redirect } from 'next/navigation';
import { FRONT_API_ENDPOINT } from '@/constants/server';
import CommonButton from '@/components/atoms/CommonButton';
import InputFormWithLabel from '@/components/molecules/InputFormWithLabel';
import styled from 'styled-components';

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

    const payload = {
      email,
      name: email,
      password,
    };

    try {
      const response = await fetch(`${FRONT_API_ENDPOINT}/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error('Singup Fail!!');
      }
    } catch (error) {
      console.error('Error during signup:', error);
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
