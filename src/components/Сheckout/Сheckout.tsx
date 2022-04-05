import { VFC } from 'react';

import cn from 'clsx';
import { vector, vector1 } from 'assets/img/icons';
import s from './styles.module.scss';

export interface СheckoutProps {
  className?: string;
}

export const Сheckout: VFC<СheckoutProps> = ({ className }) => {
  return (
    <div className={cn(s.сheckout, className)}>
      <div className={s.mainContainer}>
        <div className={s.titleWrapper}>
          <h2 className={s.title}>Token Contract</h2>
          <div className={s.logo}>
            <img src={vector} alt="" />
            <img src={vector1} alt="" />
          </div>
        </div>
        <div className={s.description}>
          Create a Token and distribute it yourself or by our Crowdsale Contract
        </div>
      </div>
    </div>
  );
};
