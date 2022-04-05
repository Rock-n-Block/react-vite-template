import { FC } from 'react';

import cn from 'clsx';

import s from './styles.module.scss';

export interface CardProps {
  className?: string;
}
export const Card: FC<CardProps> = ({ children, className }) => {
  return <div className={cn(className, s.wrapper)}>{children}</div>;
};
