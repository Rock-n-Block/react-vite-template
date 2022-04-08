import { render } from '@testing-library/react';

import { Сheckout } from './Сheckout';
import { сheckoutPropsMocked } from './Сheckout.mock';

describe('Сheckout', () => {
  it('should render', () => {
    const { container } = render(
      <Сheckout
        {...сheckoutPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
