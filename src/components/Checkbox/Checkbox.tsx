/* eslint-disable jsx-a11y/label-has-associated-control */
import { VFC } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface CheckboxProps {
  // className?: string;
}

export const Checkbox: VFC<CheckboxProps> = () => {
  return (
    <div className={cn(styles.checkboxContainer)}>
      <label className={cn(styles.label)}>
        <input type="checkbox" className={cn(styles.checkbox)} />
      </label>
    </div>
  );
};
