/* eslint-disable jsx-a11y/label-has-associated-control */
import { VFC } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface CheckboxProps {
  checked?: boolean;
  onChange?: (props: unknown) => void;
  className?: string;
  name?: string;
  id: string;
  label?: string;
  labelPosition?: 'top' | 'bottom' | 'left' | 'right';
}

export const Checkbox: VFC<CheckboxProps> = ({ id, className, checked, onChange, name, label, labelPosition }) => {
  return (
    <div className={cn(styles.checkboxContainer, className)}>
      <label className={cn(styles.label, styles[labelPosition || ''])} htmlFor={id}>
        <input
          type="checkbox"
          className={cn(styles.checkbox)}
          id={id}
          name={name}
          onChange={onChange}
          checked={checked}
        />
        {label}
      </label>
    </div>
  );
};
