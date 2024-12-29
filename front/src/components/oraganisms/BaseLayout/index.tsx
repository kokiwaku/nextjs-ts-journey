'use client';

import { FC, ReactNode } from 'react';
import { useSelector } from '@/store';
import Navigation from '@/components/molecules/Navigation';

type Props = {
  children: ReactNode;
  title: string;
};
const BaseLayout: FC<Props> = ({ children, title }) => {
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <header>
        <h1>{title}</h1>
        {auth.user.name && <p>username: {auth.user.name}</p>}
        <Navigation />
      </header>
      <main>{children}</main>
    </>
  );
};

export default BaseLayout;
