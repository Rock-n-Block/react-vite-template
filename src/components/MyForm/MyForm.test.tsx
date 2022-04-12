import { render } from '@testing-library/react';

import { MyForm } from './MyForm';
import { myFormPropsMocked } from './MyForm.mock';

describe('MyForm', () => {
  it('should render', () => {
    const { container } = render(
      <MyForm
        {...myFormPropsMocked}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
