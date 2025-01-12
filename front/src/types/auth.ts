export type AuthUserType = {
  id: string;
  name: string;
  email: string;
  created_at: string;
  updated_at: string;
};

// for auth api response
export type AuthResponseType = {
  user: AuthUserType;
};
