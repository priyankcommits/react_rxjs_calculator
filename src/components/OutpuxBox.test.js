import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import OutpuxBox from './OutputBox';

describe('OutpuxBox Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<OutpuxBox />);
  });

  it('renders output box component with correct starting value', () => {
    expect(wrapper.find('div').last().text()).toBe('');
  });
});
