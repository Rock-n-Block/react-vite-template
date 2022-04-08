import { FC } from 'react';

import cn from 'clsx';

import styles from './styles.module.scss';

export interface CardProps {
  className?: string;
}
export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(className, styles.wrapper)}>{children}</div>;
};
