import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileState } from 'types/store/profile';

const initialState: ProfileState = {
  avatar: '',
  id: null,
  address: '',
  displayName: '',
  bio: '',
  twitter: '',
  instagram: '',
  site: '',
  email: '',
  balance: '0',
};

export const userReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileInfo: (state, action: PayloadAction<ProfileState>) => ({
      ...state,
      ...action.payload,
    }),

    clearProfileInfo: () => ({
      ...initialState,
    }),
  },
});

export const { setProfileInfo, clearProfileInfo } = userReducer.actions;

export default userReducer.reducer;
