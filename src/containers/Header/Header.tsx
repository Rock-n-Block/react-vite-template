import { Button } from 'components';
import { useCallback, useEffect, VFC } from 'react';
import { Chains, WalletProviders } from 'types';
import { tokenAction } from 'store/getToken/actions';
import { useDispatch } from 'react-redux';
import { useShallowSelector } from 'hooks';
import tokenSelector from 'store/getToken/selectors';
import s from './styles.module.scss';

export interface HeaderProps {
  address: string;
  disconnect: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onConnectWallet: (provider: any, newChain: any) => void;
  onToggleChainType: () => void;
  isHomePage: boolean;
  isUserInfoLoading: boolean;
  chainType: 'testnet' | 'mainnet';
}

export const Header: VFC<HeaderProps> = ({
  address,
  disconnect,
  onConnectWallet,
  onToggleChainType,
  chainType,
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tokenAction());
  }, []);

  const { num } = useShallowSelector(tokenSelector.getDecimal);

  const handleChangeConnecting = useCallback(() => {
    if (!address.length) {
      onConnectWallet(WalletProviders.metamask, Chains.bsc);
    } else {
      disconnect();
    }
  }, [address.length, disconnect, onConnectWallet]);

  return (
    <header className={s.header}>
      <Button onClick={handleChangeConnecting}>
        {address.length ? address : 'Connect Wallet'}
      </Button>
      <div>{`Decimals: ${num}`}</div>
      <Button onClick={() => onToggleChainType()}>{chainType}</Button>
    </header>
  );
};
