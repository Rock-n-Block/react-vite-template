import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Checkbox } from './Checkbox';
import { checkboxPropsMocked } from './Checkbox.mock';

export default {
  title: 'components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => (
  <>
    <Checkbox />
    <Checkbox />

    <Checkbox />
    <Checkbox />

  </>
);
export const Default = Template.bind({});

Default.args = checkboxPropsMocked;
