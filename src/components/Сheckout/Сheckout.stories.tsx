import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Сheckout } from './Сheckout';
import { сheckoutPropsMocked } from './Сheckout.mock';

export default {
  title: 'components/Сheckout',
  component: Сheckout,
} as ComponentMeta<typeof Сheckout>;

const Template: ComponentStory<typeof Сheckout> = (args) => (
  <>
    <Сheckout {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = сheckoutPropsMocked;
