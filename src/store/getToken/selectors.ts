import type { State, DecimalsState } from 'types';

export default {
  getDecimal: (state: State): DecimalsState => state.decimals,
};
