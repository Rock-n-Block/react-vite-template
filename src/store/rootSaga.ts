import { fork } from 'redux-saga/effects';
// import profileSaga from 'store/profile/sagas';
import userSaga from 'store/user/sagas';

export default function* rootSaga() {
  yield fork(userSaga);
  // yield fork(profileSaga);
}
