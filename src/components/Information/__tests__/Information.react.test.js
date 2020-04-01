// Snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';

import { Information } from '../Information';
import { calculatorButtons } from '../../../shared/constants/index';

test('Information Initial Rendering', () => {
  const component = renderer.create(
    <Information buttons={calculatorButtons} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
