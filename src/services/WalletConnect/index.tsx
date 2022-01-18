// import { FC, createContext, useContext } from 'react';
//
// // import { observer } from 'mobx-react';
// // import rootStore from 'store';
//
// import { WalletService } from 'services/walletService';
// import { chainsEnum } from 'types';
// // import { chains } from 'config';
//
// declare global {
//   interface Window {
//     ethereum: any;
//     kardiachain: any;
//   }
// }
//
// const walletConnectorContext = createContext<{
//   connect: (chainName: chainsEnum, providerName: 'MetaMask') => Promise<any>;
//   disconnect: () => void;
//   walletService: WalletService;
// }>({
//   connect: async () => {},
//   disconnect: (): void => {},
//   walletService: new WalletService(),
// });
