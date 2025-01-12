import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IsAuthenticate, AuthUser, AuthState } from '@/types/Auth';
import { BACK_API_ENDPOINT } from '@/constants/server';

// setting for initialState
const initialState: AuthState = {
  isAuthenticate: false,
  user: {
    id: '',
    name: '',
    email: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticate = true;
    },
  },
});

export const { setAuthUser } = authSlice.actions;
export default authSlice.reducer;
