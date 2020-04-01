// Snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';

import { InputBox } from '../InputBox';

test('Input Box Initial Rendering', () => {
  const component = renderer.create(
    <InputBox />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
