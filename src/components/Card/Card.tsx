import { VFC } from 'react';

import cn from 'clsx';

import s from './styles.module.scss';

export interface CardProps {
  className?: string;
  title?: string;
  description?: string;
  image?: string;
}
export const Card: VFC<CardProps> = ({ className, title, description, image }) => {
  return (
    <div className={cn(s.card, className)}>
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
    </div>
  );
};
