import { put, takeLatest } from 'redux-saga/effects';
import apiActions from 'store/api/actions';
import { erc20Abi } from 'config/abi';
import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import { getMaxBet } from '../actions';
import actionTypes from '../actionTypes';
import { setMaxBetState } from '../reducer';
// import { setMaxBetState } from '../reducer';

const contractAddress = '0x6faf59e2999f352b01bf1e7d9c7e397736dc6163';

export function* getMaxBetSaga({ type /* , payload */ }: ReturnType<typeof getMaxBet>) {
  yield put(apiActions.request(type));
  const web3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');
  const rentContract = new web3.eth.Contract(erc20Abi as AbiItem[], contractAddress);
  try {
    const decimal = yield rentContract.methods.decimals().call();
    yield put(apiActions.success(type));
    yield put(setMaxBetState(Number(decimal)));
  } catch (err) {
    console.log(err);
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.GET_MAX_BET, getMaxBetSaga);
}
