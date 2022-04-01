import { fork } from 'redux-saga/effects';

import getMaxBet from './getMaxBet';

export default function* maxBetSaga() {
  yield fork(getMaxBet);
}
