import type { State, TokenState } from 'types';

export default {
  getDecimal: (state: State): TokenState => state.decimals,
};
