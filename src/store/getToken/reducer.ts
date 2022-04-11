import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenState } from 'types';

const initialState: TokenState = {
  decimals: '0',
};

export const tokenReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setDecimals: (state, action: PayloadAction<string>) => ({
      ...state,
      decimals: action.payload,
    }),
  },
});

export const { setDecimals } = tokenReducer.actions;

export default tokenReducer.reducer;
