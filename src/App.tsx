import { FC } from 'react';

import { Header, RouterManager } from 'containers';

import { WalletConnectContext } from 'services/walletConnect';

import 'react-toastify/dist/ReactToastify.css';

const App: FC = () => {
  return (
    <WalletConnectContext>
      <Header />
      <RouterManager />
    </WalletConnectContext>
  );
};
export default App;
