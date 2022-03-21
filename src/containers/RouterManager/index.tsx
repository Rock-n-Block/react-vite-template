import { FC, useMemo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { routes } from 'appConstants/routes';
import { Home } from 'pages';
import { AnimatedRoutes } from 'containers/AnimatedRoutes';

interface Props {
  shouldAnimateRoutes?: boolean;
}

export const RouteManager: FC<Props> = ({ shouldAnimateRoutes = true }) => {
  const routesList = useMemo(() => (
    <>
      <Route path="*" element={<Navigate to="/" />} />
      <Route path={routes.root} element={<Home />} />
    </>
  ), []);
  return (
    shouldAnimateRoutes ? (
      <AnimatedRoutes>
        {routesList}
      </AnimatedRoutes>
    ) : (
      <Routes>
        {routesList}
      </Routes>
    )
  );
};
