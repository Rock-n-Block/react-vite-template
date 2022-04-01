import { fork } from 'redux-saga/effects';
import userSaga from 'store/user/sagas';
import getMaxBet from 'store/bets/sagas';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(getMaxBet);
}
