'use client';

import { TypeHandleSetAuthUser, useAuth } from '@/hooks/useAuth';
import { AuthUserType } from '@/types/Auth';
import { createContext, ReactNode, useContext } from 'react';

type ContextType = {
  authUser: AuthUserType | undefined;
  handleSetAuthUser: TypeHandleSetAuthUser;
};
export const AuthContext = createContext({} as ContextType);

type Props = {
  children: ReactNode;
};
export const AuthProvider: React.FC<Props> = ({ children }) => {
  const { authUser, handleSetAuthUser } = useAuth();

  return (
    <>
      <AuthContext.Provider
        value={{
          authUser,
          handleSetAuthUser,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export const useAuthContext = () => useContext(AuthContext);
