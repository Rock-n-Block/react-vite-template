import { ComponentProps, FC } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface Props {
  cssTransitionProps?: ComponentProps<typeof CSSTransition>;
}

export const AnimatedRoutes: FC<Props> = ({ cssTransitionProps, children }) => {
  const location = useLocation();
  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
        {...cssTransitionProps}
      >
        <Routes location={location}>{children}</Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};
