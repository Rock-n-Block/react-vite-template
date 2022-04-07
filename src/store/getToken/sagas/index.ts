import { fork } from 'redux-saga/effects';

import getDecimals from './getDecimals';

export default function* tokenSaga() {
  yield fork(getDecimals);
}
