/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';

import { Layout, RouteManager as Router } from 'containers';
import { ToastContainer } from 'react-toastify';
import Web3 from 'web3';
import { erc20Abi } from 'config/abi';

import 'react-toastify/dist/ReactToastify.css';
import 'assets/styles/index.scss';
import { WalletConnectContext } from 'services';

declare let window: any;

const App: FC = () => {
  const web3 = new Web3(window.ethereum);
  const contractAbi: any = erc20Abi;
  const contractAddress = '0x906041Be37F54D50c37c76c31351dA7CDddb0eBc';
  const storageContract = new web3.eth.Contract(contractAbi, contractAddress);
  storageContract.methods
    .decimals()
    .call()
    .then((data: any) => console.log(data));
  return (
    <WalletConnectContext>
      <ToastContainer autoClose={4000} hideProgressBar position="top-right" closeButton={false} />
      <Layout>
        <Router />
      </Layout>
    </WalletConnectContext>
  );
};
export default App;
