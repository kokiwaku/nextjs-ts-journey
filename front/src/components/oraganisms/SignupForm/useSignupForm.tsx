import { useState } from 'react';
import { EventType } from '@/types/Event';
import { redirect } from 'next/navigation';
import { signUp } from '@/app/apis/authApi';

type StatesType = {
  email: string;
  password: string;
  isAbleToSubmit: boolean;
};
type ActionsType = {
  handleSubmit: EventType['onSubmit'];
  handleSetEmail: EventType['onChangeInput'];
  handleSetPassword: EventType['onChangeInput'];
};

export const useSignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAbleToSubmit = email.trim() !== '' && password.trim() !== '';

  const handleSubmit: EventType['onSubmit'] = async (event) => {
    event.preventDefault();

    const response = await signUp(email, password);
    // response check
    if (response.code !== 200) {
      console.error(response.message);
      return;
    }

    // 認証OK
    redirect('/');
  };

  const handleSetEmail: EventType['onChangeInput'] = (event) =>
    setEmail(event.target.value);

  const handleSetPassword: EventType['onChangeInput'] = (event) =>
    setPassword(event.target.value);

  const states: StatesType = {
    email,
    password,
    isAbleToSubmit,
  };

  const actions: ActionsType = {
    handleSubmit,
    handleSetEmail,
    handleSetPassword,
  };

  // 呼び出し側で型推論できるように"as const"を指定
  return [states, actions] as const;
};
