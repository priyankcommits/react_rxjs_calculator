import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import InpuxBox from './InputBox';

describe('InputBox Component' , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<InpuxBox />);
  });

  it('renders input box component with correct starting value', () => {
    expect(wrapper.find('input')).not.toBeNull();
  })

});
