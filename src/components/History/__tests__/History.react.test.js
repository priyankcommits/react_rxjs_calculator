// Snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';

import { History } from '../History';

test('History Layout Initial Rendering', () => {
  const component = renderer.create(
    <History />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
