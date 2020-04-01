import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import { InputBox } from '../InputBox';

describe('InputBox Component' , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<InputBox />);
  });

  it('renders input box component with correct starting value', () => {
    expect(wrapper.find('input')).not.toBeNull();
  });

});
