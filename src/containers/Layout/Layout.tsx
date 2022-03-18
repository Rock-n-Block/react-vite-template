import { UrlObject } from 'url';

import { FC, useCallback, useMemo } from 'react';

import { Footer, Header } from 'containers';
import { MobileNavigation } from 'containers/MobileNavigation';
import { useWalletConnectorContext } from 'services';
import { useShallowSelector, useWindowState } from 'hooks';
import { RequestStatus, State, UserState, WalletProviders } from 'types';
import userSelector from 'store/user/selectors';
import { NotificationModal } from 'containers/NotificationModal';
import uiSelector from 'store/ui/selectors';
import { useLocation } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import actionTypesUser from 'store/user/actionTypes';
import { useSmoothTopScroll } from 'hooks/useSmoothTopScroll';
import s from './styles.module.scss';

export interface LayoutProps {
  route?: UrlObject | string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useWindowState();
  const { pathname } = useLocation();
  const { connect, disconnect } = useWalletConnectorContext();

  // const dispatch = useDispatch();

  const { address } = useShallowSelector<State, UserState>(userSelector.getUser);
  const { [actionTypesUser.UPDATE_USER_INFO]: userInfoRequest } = useShallowSelector(uiSelector.getUI);

  const isUserInfoLoading = useMemo(() => userInfoRequest === RequestStatus.REQUEST, [userInfoRequest]);

  const handleConnectWallet = useCallback(
    async (provider = WalletProviders.metamask, newChain) => {
      connect(provider, newChain);
    },
    [connect],
  );

  const disconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  const firstPathAtPathname = useMemo(() => pathname.split('/')[1], [pathname]);

  useSmoothTopScroll(firstPathAtPathname);

  const isHomePage = useMemo(() => pathname === '/', [pathname]);

  const isNeedToShowHeaderFooter = useMemo(
    // eslint-disable-next-line max-len
    () => isHomePage, // || other conditions
    [isHomePage],
  );

  return (
    <div className={s.root}>
      <div className={s.content}>
        <NotificationModal />
        {+width < 800 && <MobileNavigation />}
        {isNeedToShowHeaderFooter && (
          <Header address={address} disconnect={disconnectWallet} onConnectWallet={handleConnectWallet} isHomePage={isHomePage} isUserInfoLoading={isUserInfoLoading} />
        )}

        {children}
        {isNeedToShowHeaderFooter && <Footer />}
      </div>
    </div>
  );
};
