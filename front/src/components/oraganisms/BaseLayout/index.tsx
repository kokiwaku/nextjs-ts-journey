'use client';

import { useSelector } from '@/store';
import Navigation from '@/components/molecules/Navigation';

type Props = {
  children: React.ReactNode;
  title: string;
};
const BaseLayout: React.FC<Props> = ({ children, title }) => {
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
