import React from 'react';
import renderer from 'react-test-renderer';

import Dashboard from '../../../sections/Dashboard/Dashboard';

describe('Dashboard', () => {
  it('renders the component correctly', () => {
    const component = renderer.create(<Dashboard />);
    expect(component).toMatchSnapshot();
  });
});
