// Snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';

import { OutputBox } from '../OutputBox';

test('Output Box Initial Rendering', () => {
  const component = renderer.create(
    <OutputBox />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
