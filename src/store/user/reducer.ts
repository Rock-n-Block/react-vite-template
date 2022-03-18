import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { UserState } from 'types';

const initialState: UserState = {
  id: null,
  avatar: '',
  address: '',
  balance: 0,
  key: '',
  provider: '',
  displayName: '',
};

export const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserState: (state, action: PayloadAction<Partial<UserState>>) => ({
      ...state,
      ...action.payload,
    }),
    disconnectWalletState: () => {
      localStorage.removeItem('walletconnect');
      return {
        ...initialState,
      };
    },
  },
});

export const { disconnectWalletState, updateUserState } = userReducer.actions;

export default userReducer.reducer;
