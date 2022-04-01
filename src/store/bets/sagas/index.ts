import { fork } from 'redux-saga/effects';

import getTokenBalance from './getMaxBet';

export default function* userSagas() {
  yield fork(getTokenBalance);
}
