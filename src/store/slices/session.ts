import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface SessionState {
  token?: string;
}

const initialState: SessionState = {};

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      delete state.token;
    },
  },
})

export const { login, logout } = sessionSlice.actions;

export const selectToken = (state: RootState) => state.session?.token;

export default sessionSlice.reducer;