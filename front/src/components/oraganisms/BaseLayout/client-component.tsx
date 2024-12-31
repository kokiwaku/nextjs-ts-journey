'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { setAuthUser } from '@/store/modules/Auth';
import { AuthUser } from '@/types/auth';
import store from '@/store';

type RootLayoutProps = {
  user?: AuthUser | undefined;
  children: React.ReactNode;
};
export default function ClientComponent({ user, children }: RootLayoutProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    // サーバーから渡されたユーザー情報を Redux に保存
    if (user) {
      dispatch(setAuthUser(user));
    }
  }, [user, dispatch]);

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
}
