// import { getTokenBalance } from './../../user/actions';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest, call } from 'typed-redux-saga';
import apiActions from 'store/api/actions';
import Web3 from 'web3';
import { erc20Abi } from 'config/abi';
import { setDecimals } from '../reducer';

import { getDecimals } from '../actions';
import actionTypes from '../actionTypes';

declare let window: any;
const web3 = new Web3(window.ethereum);
const contractAbi: any = erc20Abi;
const contractAddressChimera = '0x906041Be37F54D50c37c76c31351dA7CDddb0eBc';

export function* decimalsWorker({ type }: ReturnType<typeof getDecimals>) {
  yield put(apiActions.request(type));

  try {
    const tokenContract = new web3.eth.Contract(contractAbi, contractAddressChimera);

    web3.eth.getBalance(contractAddressChimera).then((data) => console.log(data)); // getBalance

    const balanceOfToken = (yield call(
      tokenContract.methods.balanceOf(contractAddressChimera).call,
    )) as string;
    console.log(balanceOfToken);

    const decimals = (yield call(tokenContract.methods.decimals().call)) as string;

    yield put(setDecimals(decimals));
    yield put(apiActions.success(type));
  } catch (err) {
    console.error(err);
    yield put(apiActions.error(type, err));
  }
}

export default function* listener() {
  yield takeLatest(actionTypes.GET_DECIMALS, decimalsWorker);
}
