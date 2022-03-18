import { Button } from 'components';
import { VFC } from 'react';
import { Chains, WalletProviders } from 'types';

import s from './styles.module.scss';

export interface HeaderProps {
  address: string;
  disconnect: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onConnectWallet: (provider: any, newChain: any) => void;
  isHomePage: boolean;
  isUserInfoLoading: boolean;
}

export const Header: VFC<HeaderProps> = ({ address, disconnect, onConnectWallet, isHomePage, isUserInfoLoading }) => {
  console.log(isHomePage, isUserInfoLoading);

  return (
    <header className={s.header}>
      {!!address.length && <span>{address}</span>}
      <div>
        <Button onClick={() => onConnectWallet(WalletProviders.metamask, Chains.bsc)}>Connect Wallet</Button>
        <Button onClick={disconnect}>Disconnect Wallet</Button>
      </div>
    </header>
  );
};
