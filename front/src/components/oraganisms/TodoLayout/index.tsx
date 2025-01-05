'use client';

import { useEffect, useState } from 'react';
import { getUser } from '@/app/apis/authApi';
import Navigation from '@/components/molecules/Navigation';
import { AuthUser } from '@/types/auth';

type Props = {
  children: React.ReactNode;
  title: string;
};
const TodoLayout: React.FC<Props> = ({ children, title }) => {
  const [user, setUser] = useState<AuthUser | undefined>();

  const handleGetAuthUser = async () => {
    const response = await getUser();
    const user = response?.data?.user;
    setUser(user);
  };

  useEffect(() => {
    handleGetAuthUser();
  }, []);

  return (
    <>
      <header>
        <h1>{title}</h1>
        {user !== undefined && <p>username: {user.name}</p>}
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};

export default TodoLayout;
