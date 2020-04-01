// Snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';

import { Home } from '../Home';

test('Home Initial Rendering', () => {
  const component = renderer.create(
    <Home />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
