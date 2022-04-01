import { VFC } from 'react';

import cn from 'clsx';

import s from './styles.module.scss';

export interface SwitcherProps {
  className?: string;
}

export const Switcher: VFC<SwitcherProps> = ({ className }) => {
  return (
    <div className={cn(s.switcherContainer, className)}>
      <input type="checkbox" className={cn(s.checkbox)} />
      <div className={cn(s.switcher)} />

    </div>
  );
};
