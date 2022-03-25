import { CSSProperties, FC, PropsWithChildren, RefObject, SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface ButtonProps {
  variant?: 'filled' | 'outlined' | 'text';
  size?: 'lg' | 'md' | 'sm';
  type?: 'button' | 'submit';
  disabled?: boolean;
  style?: CSSProperties;
  href?: string;
  btnRef?: RefObject<HTMLButtonElement>;
  className?: string;
  onClick?: (event: never) => void;
  onMouseLeave?: (event: never) => void;
  onMouseOver?: (event: SyntheticEvent) => void;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  variant = 'outlined',
  size = 'lg',
  onClick = () => {},
  className,
  type = 'button',
  children,
  disabled,
  href,
  btnRef,
  onMouseLeave,
  onMouseOver = () => {},
}) => {
  if (href) {
    return (
      <Link
        to={href}
        className={cn(
          className,
          styles.button,
          styles[variant],
          styles[size],
          { [styles.disabled]: disabled },
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      ref={btnRef}
      type={type === 'submit' ? 'submit' : 'button'}
      className={cn(
        className,
        styles.button,
        styles[variant],
        styles[size],
        { [styles.disabled]: disabled },
      )}
      onClick={onClick}
      disabled={disabled}
      onMouseLeave={onMouseLeave}
      onMouseEnter={onMouseOver}
    >
      {children}
    </button>
  );
};
