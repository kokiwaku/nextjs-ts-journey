import { FormEvent, useMemo, useState } from 'react';
import { EventType } from '@/types/Event';
import { TypeHandleSetAuthUser } from '@/hooks/useAuth';

type StatesType = {
  email: string;
  password: string;
  isAbleToSubmit: boolean;
};
type ActionsType = {
  handleSetEmail: EventType['onChangeInput'];
  handleSetPassword: EventType['onChangeInput'];
};

type Props = {
  handleSetAuthUser: TypeHandleSetAuthUser | [];
};
export const useLoginTemplate = ({ handleSetAuthUser }: Props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isAbleToSubmit = email.trim() !== '' && password.trim() !== '';

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

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
    handleSetEmail,
    handleSetPassword,
  };

  // 呼び出し側で型推論できるように"as const"を指定
  return [states, actions] as const;
};
