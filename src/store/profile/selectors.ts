import type { ProfileState, State } from 'types';

export default {
  getProfile: (state: State): ProfileState => state.profile,
  // eslint-disable-next-line max-len
  getProp:
    <T extends keyof ProfileState>(propKey: T) =>
    (state: State) =>
      state.profile[propKey],
};
