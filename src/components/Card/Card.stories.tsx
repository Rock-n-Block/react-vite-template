import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { cardPropsMocked } from './Card.mock';

export default {
  title: 'components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <>
    <Card {...args}>adakdnalsdnaslkdnlkasdnlaksdnalksdnlk</Card>
  </>
);
export const Default = Template.bind({});

Default.args = cardPropsMocked;
