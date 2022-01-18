import { FC, useCallback } from 'react';

import { observer } from 'mobx-react-lite';

import { Button } from 'components';

import { useWalletConnectorContext } from 'services';
import { chainsEnum } from 'types';

import s from './Header.module.scss';

const Header: FC = observer(() => {
  const { connect } = useWalletConnectorContext();
  const connectToWallet = useCallback(() => {
    connect(chainsEnum['Binance-Smart-Chain'], 'MetaMask').catch(() => {});
  }, [connect]);
  return (
    <div className={s.header_wrapper}>
      <Button onClick={connectToWallet}>Connect Wallet</Button>
    </div>
  );
});

export default Header;
