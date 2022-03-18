/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, FC, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { login, updateUserInfo } from 'store/user/actions';
import { disconnectWalletState, updateUserState } from 'store/user/reducer';
import userSelector from 'store/user/selectors';

import { Subscription } from 'rxjs';

import { useShallowSelector } from 'hooks';
import { Chains, State, UserState, WalletProviders } from 'types';

import { WalletService } from '../walletService';

declare global {
  interface Window {
    ethereum: unknown;
  }
}

interface IContextValue {
  connect: (provider: WalletProviders, chain: Chains) => Promise<void>;
  disconnect: () => void;
  walletService: WalletService;
}

const Web3Context = createContext({} as IContextValue);

const WalletConnectContext: FC = ({ children }) => {
  const [currentSubsriber, setCurrentSubsciber] = useState<Subscription>();
  const WalletConnect = useMemo(() => new WalletService(), []);
  const dispatch = useDispatch();
  const {
    address,
    key,
    provider: WalletProvider,
  } = useShallowSelector<State, UserState>(userSelector.getUser);

  const subscriberSuccess = useCallback(
    (data: any) => {
      if (data.name === 'accountsChanged') {
        dispatch(login({ address: data.address, web3Provider: WalletConnect.Web3() }));
        toast.info('Please sign login message at MetaMask');
      }
    },
    [WalletConnect, dispatch],
  );

  const subscriberError = useCallback(
    (err: any) => {
      console.error(err);
      if (err.code === 4) {
        WalletConnect.resetConnect();
        toast.error('You changed to wrong network. Please choose Binance-Smart-Chain');
        dispatch(disconnectWalletState());
      }
    },
    [WalletConnect, dispatch],
  );

  const connect = useCallback(
    async (provider: WalletProviders, chain: Chains) => {
      const connected = await WalletConnect.initWalletConnect(provider, chain);
      if (connected) {
        try {
          // ContractService.resetWeb3(WalletConnect.Web3());
          const sub = WalletConnect.eventSubscribe().subscribe(subscriberSuccess, subscriberError);
          const accountInfo: any = await WalletConnect.getAccount();
          if (key?.length && address === accountInfo?.address) {
            dispatch(updateUserInfo({ web3Provider: WalletConnect.Web3() }));
            return;
          }

          if (accountInfo.address) {
            dispatch(login({ address: accountInfo.address, web3Provider: WalletConnect.Web3() }));
            dispatch(updateUserState({ provider: accountInfo.type }));
          }

          setCurrentSubsciber(sub);
        } catch (error: any) {
          console.log(error);
          // metamask doesn't installed,
          // redirect to download MM or open MM on mobile
          if (error.code === 4) {
            window.open(
              `https://metamask.app.link/dapp/${
                window.location.hostname + window.location.pathname
              }/?utm_source=mm`,
            );
          }
        }
      }
    },
    [WalletConnect, address, dispatch, key?.length, subscriberError, subscriberSuccess],
  );

  const disconnect = useCallback(() => {
    dispatch(disconnectWalletState());
    WalletConnect.resetConnect();
    currentSubsriber?.unsubscribe();
  }, [WalletConnect, currentSubsriber, dispatch]);

  useEffect(() => {
    // connect user if he connected previously
    if (WalletProvider) {
      connect(WalletProviders.metamask, Chains.bsc);
    }
  }, [WalletProvider, connect]);

  return (
    <Web3Context.Provider value={{ connect, disconnect, walletService: WalletConnect }}>
      {children}
    </Web3Context.Provider>
  );
};

const useWalletConnectorContext = () => useContext(Web3Context);

export { WalletConnectContext, useWalletConnectorContext };
