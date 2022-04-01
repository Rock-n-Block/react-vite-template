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
    setMinBetState: (state, action: PayloadAction<Partial<BetState>>) => ({
      ...state,
      ...action.payload,
    }),
    setMaxBetState: (state, action: PayloadAction<Partial<BetState>>) => ({
      ...state,
      ...action.payload,
    }),
    resetBetState: () => ({
      ...initialState,
    }),

  },
});

export const { setMinBetState, setMaxBetState, resetBetState } = betReducer.actions;

export default betReducer.reducer;
