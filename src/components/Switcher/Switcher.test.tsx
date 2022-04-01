import { render } from '@testing-library/react';

import { Switcher } from './Switcher';
import { switcherPropsMocked } from './Switcher.mock';

describe('Switcher', () => {
  it('should render', () => {
    const { container } = render(
      <Switcher
        {...switcherPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
