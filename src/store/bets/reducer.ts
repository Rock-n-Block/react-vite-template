import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface BetState {
  minBet: number,
  maxBet: number,
}

const initialState: BetState = {
  minBet: 0,
  maxBet: 0,
};

export const betReducer = createSlice({
  name: 'bet',
  initialState,
  reducers: {
    setMinBetState: (state, action: PayloadAction<number>) => ({
      ...state,
      minBet: action.payload,
    }),
    setMaxBetState: (state, action: PayloadAction<number>) => ({
      ...state,
      maxBet: action.payload,
    }),
    resetBetState: () => ({
      ...initialState,
    }),

  },
});

export const { setMinBetState, setMaxBetState, resetBetState } = betReducer.actions;

export default betReducer.reducer;
