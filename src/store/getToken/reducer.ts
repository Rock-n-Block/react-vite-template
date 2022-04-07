import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import { UserState } from 'types';

interface DecimalsState {
  num: string;
}
const initialState: DecimalsState = {
  num: '0',
};

export const decimalsReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getDecimalOfToken: (state, action: PayloadAction<string>) => ({
      ...state,
      num: action.payload,
    }),
  },
});

export const { getDecimalOfToken } = decimalsReducer.actions;

export default decimalsReducer.reducer;
