import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Switcher } from './Switcher';
import { switcherPropsMocked } from './Switcher.mock';

export default {
  title: 'components/Switcher',
  component: Switcher,
} as ComponentMeta<typeof Switcher>;

const Template: ComponentStory<typeof Switcher> = (args) => (
  <>
    <Switcher {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = switcherPropsMocked;
