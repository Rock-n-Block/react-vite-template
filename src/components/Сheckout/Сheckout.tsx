import { VFC } from 'react';
import { Card } from 'components/Card';
import { vector } from 'assets/img/icons';
import cn from 'clsx';
import s from './styles.module.scss';

export interface СheckoutProps {
  className?: string;
}

export const Сheckout: VFC<СheckoutProps> = () => {
  return (
    <Card>
      <div className={s.mainContainer}>
        <div className={cn(s.titleWrapper)}>
          <h2 className={cn(s.title)}>Token Contract</h2>
          <div className={s.logo}>
            <img src={vector} alt="" />
          </div>
        </div>
        <div className={s.description}>
          Create a Token and distribute it yourself or by our Crowdsale Contract
        </div>
      </div>
    </Card>
  );
};
