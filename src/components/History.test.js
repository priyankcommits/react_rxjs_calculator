import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import History from './History';

describe('History Component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<History />);
  });

  it('renders history component with correct starting value', () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.find('.modal-title').first().text()).toBe('Results History');
  });
});
