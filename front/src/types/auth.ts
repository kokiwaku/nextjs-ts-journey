export type IsAuthenticate = boolean;

export type AuthUser = {
  id: string,
  name: string,
  email: string,
};

export type AuthState = {
  isAuthenticate: IsAuthenticate,
  user: AuthUser
}