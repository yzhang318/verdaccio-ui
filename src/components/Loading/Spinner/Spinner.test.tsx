import React from 'react';

import { render, cleanup } from 'verdaccio-ui/utils/test-react-testing-library';

import Spinner from '.';

describe('<Spinner /> component', () => {
  beforeEach(cleanup);

  test('should render the component in default state', () => {
    const wrapper = render(<Spinner />);
    expect(wrapper).toMatchSnapshot();
  });
});
