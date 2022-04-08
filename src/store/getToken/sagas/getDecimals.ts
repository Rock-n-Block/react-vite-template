/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest, call } from 'typed-redux-saga';
import apiActions from 'store/api/actions';
import Web3 from 'web3';
import { erc20Abi } from 'config/abi';
import { getDecimalOfToken } from '../reducer';

import { tokenAction } from '../actions';
import actionTypes from '../actionTypes';

declare let window: any;
const web3 = new Web3(window.ethereum);
const contractAbi: any = erc20Abi;
const contractAddress = '0x906041Be37F54D50c37c76c31351dA7CDddb0eBc';

export function* getDecimals({ type }: ReturnType<typeof tokenAction>) {
  yield put(apiActions.request(type));

  try {
    const storageContract = new web3.eth.Contract(contractAbi, contractAddress);

    const response = (yield call(storageContract.methods.decimals().call)) as string;
    yield put(getDecimalOfToken(response));
    yield put(apiActions.success(type));
  } catch (err) {
    console.error(err);
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.GET_DECIMALS, getDecimals);
}
