import { INetwork } from '@amfi/connect-wallet/dist/interface';

import { chainsEnum, IConnectWallet, IContracts } from 'types';

export const chains: {
  [key: string]: {
    name: chainsEnum;
    network: INetwork;
    provider: {
      [key: string]: any;
    };
    explorer: string;
  };
} = {
  [chainsEnum['Binance-Smart-Chain']]: {
    name: chainsEnum['Binance-Smart-Chain'],
    network: {
      chainID: import.meta.env.VITE_CHAIN_ID,
      chainName: import.meta.env.VITE_CHAIN_NAME,
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpc: import.meta.env.VITE_RPC,
      blockExplorerUrl: import.meta.env.VITE_BLOCK_EXPLORER_URL,
    },
    provider: {
      MetaMask: { name: 'MetaMask' },
    },
    explorer: import.meta.env.VITE_EXPLORER,
  },
};

export const connectWallet = (chainName: chainsEnum): IConnectWallet => {
  const chain = chains[chainName];

  return {
    wallets: ['MetaMask'],
    network: chain.network,
    provider: chain.provider,
    settings: { providerType: true },
  };
};

export const contracts: IContracts = {
  type: import.meta.env.VITE_CONTRACT,
  names: ['STAKING', 'QUACK', 'VOTING'],
  params: {},
};
