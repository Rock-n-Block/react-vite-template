import { ComponentMeta, ComponentStory } from '@storybook/react';

import { MyForm } from './MyForm';
import { myFormPropsMocked } from './MyForm.mock';

export default {
  title: 'components/MyForm',
  component: MyForm,
} as ComponentMeta<typeof MyForm>;

const Template: ComponentStory<typeof MyForm> = (args) => (
  <>
    <MyForm {...args} />
  </>
);
export const Default = Template.bind({});

Default.args = myFormPropsMocked;
