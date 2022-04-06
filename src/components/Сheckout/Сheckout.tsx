import { VFC } from 'react';
import { Card } from 'components/Card';
import cn from 'clsx';
import s from './styles.module.scss';

export interface СheckoutProps {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
}

export const Сheckout: VFC<СheckoutProps> = ({ image, title, description }) => {
  return (
    <Card>
      <div className={s.mainContainer}>
        <div className={cn(s.titleWrapper)}>
          <h2 className={cn(s.title)}>{title}</h2>
          {image && (
            <div className={s.logo}>
              <img src={image} alt="" />
            </div>
          )}
        </div>
        <div className={s.description}>{description}</div>
      </div>
    </Card>
  );
};
