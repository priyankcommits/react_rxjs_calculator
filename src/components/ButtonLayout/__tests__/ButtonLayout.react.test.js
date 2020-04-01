// Snapshot testing
import React from 'react';
import renderer from 'react-test-renderer';

import { ButtonLayout } from '../ButtonLayout';
import { calculatorButtons } from '../../../shared/constants/index';

test('Button Layout Initial Rendering', () => {
  const component = renderer.create(
    <ButtonLayout buttons={calculatorButtons} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
