import { AuthUserType } from '@/types/Auth';
import { useState } from 'react';

export type TypeHandleSetAuthUser = (AuthUser: AuthUserType) => void;

export const useAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUserType | undefined>();

  const handleSetAuthUser: TypeHandleSetAuthUser = (AuthUser) =>
    setAuthUser(AuthUser);

  return {
    authUser,
    handleSetAuthUser,
  };
};
