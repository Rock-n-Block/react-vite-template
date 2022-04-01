import { FC } from 'react';
import clsx from 'clsx';
import { InfoIcon, WarningIcon, ErrorIcon, SuccessIcon, CloseIcon } from 'assets/icons/icons/components/';
import s from './styles.module.scss';

export type ToastifyProps = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  className?: string;
};

const toastifyHelper = {
  success: <SuccessIcon />,
  warning: <WarningIcon />,
  info: <InfoIcon />,
  error: <ErrorIcon />,
};

export const Toastify: FC<ToastifyProps> = ({ type, message }) => {
  return (
    <div className={clsx(s.toastify, s[type], `${type}`)}>
      <div className={clsx(s.startAdorment)}> {toastifyHelper[type]} </div>
      <div className={s[`${type}Text`]}>{message}</div>
      <div className={clsx(s.endAdorment, s[`icon${type}`])}>
        <CloseIcon />
      </div>
    </div>
  );
};
