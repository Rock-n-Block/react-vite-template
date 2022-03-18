import React, { FC } from 'react';
import clsx from 'clsx';
import classes from './Toastify.module.scss';

export type ToastifyProps = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  className?: string;
};

export const Toastify: FC<ToastifyProps> = ({ type, message, className }) => {
  return (
    <div className={clsx(classes.toastify, classes[type], className)}>
      {/* <div className={classes.icon}>{toastifyHelper[type]}</div> */}
      <div className={classes[`text${type}`]}>{message}</div>
      <div className={clsx(classes.closeBtnContainer, classes[`icon${type}`])}>
        <span>closeIcon</span>
      </div>
    </div>
  );
};
