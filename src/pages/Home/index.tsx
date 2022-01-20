import { FC, useCallback } from 'react';

import { useTypedSelector } from 'store';

import { Loader } from 'components';

import { useWalletConnectorContext } from 'services/WalletConnect';
import { chainsEnum } from 'types';

import s from './Home.module.scss';

const Home: FC = () => {
  const { address, isLoading } = useTypedSelector((state) => state.UserReducer);
  const { connect, disconnect } = useWalletConnectorContext();

  const onClickHandler = useCallback(() => {
    if (address) {
      disconnect();
    } else {
      connect(chainsEnum['Binance-Smart-Chain'], 'MetaMask');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [address]);

  return (
    <div className={s.home_wrapper}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={s.title}>Hello {address || 'anonymous'}</div>
          <button type="button" onClick={onClickHandler}>
            {address ? 'disconnect' : 'connect'}
          </button>
        </>
      )}
    </div>
  );
};
export default Home;
