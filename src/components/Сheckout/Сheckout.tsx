import { VFC } from 'react';
import { vector } from 'assets/img/icons';
import { Card } from 'components/Card';

export interface СheckoutProps {
  className?: string;
}

export const Сheckout: VFC<СheckoutProps> = () => {
  return (
    <Card
      image={vector}
      title="Token Contract"
      description=" Create a Token and distribute it yourself or by our Crowdsale Contract"
    />
  );
};
