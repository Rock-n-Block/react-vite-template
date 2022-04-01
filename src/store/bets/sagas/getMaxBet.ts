import { put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';

import { getMaxBet } from '../actions';
import actionTypes from '../actionTypes';
// import { setMaxBetState } from '../reducer';

export function* getMaxBetSaga({ type /* , payload */ }: ReturnType<typeof getMaxBet>) {
  yield put(apiActions.request(type));
  try {
    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.GET_MAX_BET, getMaxBetSaga);
}
