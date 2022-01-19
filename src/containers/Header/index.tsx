import { FC, useCallback, useEffect } from 'react';

import { observer } from 'mobx-react-lite';

import { Button } from 'components';

import { useWalletConnectorContext } from 'services';
import { contracts } from 'config';
import { chainsEnum } from 'types';

import s from './Header.module.scss';

const Header: FC = observer(() => {
  const { connect, walletService } = useWalletConnectorContext();
  const connectToWallet = useCallback(() => {
    connect(chainsEnum['Binance-Smart-Chain'], 'MetaMask').catch(() => {});
  }, [connect]);

  // get data without connect
  useEffect(() => {
    walletService
      .callContractMethod({
        contractName: 'STAKING',
        methodName: 'fees',
        data: [1],
        contractAddress: contracts.params.STAKING[contracts.type].address,
        contractAbi: contracts.params.STAKING[contracts.type].abi,
      })
      .then((fees) => {
        console.log(fees, 'fees');
      })
      .catch((err) => {
        console.log('err', err);
      });
  }, []);

  return (
    <div className={s.header_wrapper}>
      <Button onClick={connectToWallet}>Connect Wallet</Button>
    </div>
  );
});

export default Header;
