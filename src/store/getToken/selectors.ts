import { DecimalsState } from '../../types/store/decimals';
// import type { State, DecimalsState } from 'types';

export default {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getDecimal: (state: any): DecimalsState => state.decimals,
  // getProp:
  //   <T extends keyof UserState>(propKey: T) =>
  //   (state: State) =>
  //     state.user[propKey],
};
