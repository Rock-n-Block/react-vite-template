import { VFC } from 'react';
import { Card } from 'components/Card';
import cn from 'clsx';
import { H2 } from 'components';
import s from './styles.module.scss';

export interface СheckoutProps {
  className?: string;
  image?: string;
  title?: string;
  description?: string;
}

export const Сheckout: VFC<СheckoutProps> = ({ image, title, description, className }) => {
  return (
    <Card>
      <div className={cn(s.titleWrapper, className)}>
        <H2 className={cn(s.title)}>{title}</H2>
        {image && (
          <div className={s.logo}>
            <img src={image} alt="" />
          </div>
        )}
      </div>
      <div className={s.description}>{description}</div>
    </Card>
  );
};
