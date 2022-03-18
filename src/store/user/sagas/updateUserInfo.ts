/* eslint-disable max-len */
import { call, put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { baseApi } from 'store/api/apiRequestBuilder';

import { camelize } from 'utils/camelize';

import { UserState } from 'types';
import { disconnectWalletState, updateUserState } from '../reducer';

import { getTokenBalance, updateUserInfo } from '../actions';
import actionTypes from '../actionTypes';

export function* updateUserInfoSaga({ type, payload: { web3Provider } }: ReturnType<typeof updateUserInfo>) {
  yield put(apiActions.request(type));
  try {
    const { data } = yield call(baseApi.getSelfInfo);
    yield put(getTokenBalance({ web3Provider }));
    const { address }: Partial<UserState> = camelize(data);

    yield put(updateUserState({ address }));

    yield put(apiActions.success(type));
  } catch (err) {
    console.log(err);
    yield put(apiActions.error(type, err));
    yield put(disconnectWalletState());
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.UPDATE_USER_INFO, updateUserInfoSaga);
}
