import { fork } from 'redux-saga/effects';
import userSaga from 'store/user/sagas';
import tokenSaga from './getToken/sagas';

export default function* rootSaga() {
  yield fork(userSaga);
  yield fork(tokenSaga);
}
