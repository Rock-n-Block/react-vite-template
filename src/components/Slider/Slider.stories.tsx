import { useCallback } from '@storybook/addons';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';

import { Slider } from './Slider';
import { sliderPropsMocked } from './Slider.mock';

export default {
  title: 'components/Slider',
  component: Slider,
} as ComponentMeta<typeof Slider>;
const Template: ComponentStory<typeof Slider> = () => {
  const [value, setValue] = useState(null);
  // const onChange = useCallback(() => {});
  const handleSLiderChange = useCallback((event) => {
    const newValue = event.target.value;
    setValue(newValue);
  }, []);
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(value);
  }, [value]);
  return (
    <>
      {sliderPropsMocked.map((slider) => (
        <Slider {...slider} onChangeComplete={handleSLiderChange} /* onChange={onChange} */ />
      ))}
    </>
  );
};
export const Default = Template.bind({});

Default.args = sliderPropsMocked;
