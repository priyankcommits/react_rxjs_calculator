import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import { Information } from '../Information';
import { calculatorButtons } from '../../../shared/constants/index';

describe('Information Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Information buttons={calculatorButtons} />);
  });

  it('renders information component with correct starting value', () => {
    wrapper.find('span').simulate('click');
    expect(wrapper.find('.modal-title').first().text()).toBe('Keyboard ShorcutsButton : Shortcut');
  });
});
