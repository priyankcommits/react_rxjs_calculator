import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import ButtonLayout from './ButtonLayout';

describe('ButtonLayout Component' , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ButtonLayout />);
  });

  it('renders buttons correctly with value', () => {
    expect(wrapper.find('button').findWhere(btn => btn.text() === '1')).not.toBeNull();
    expect(wrapper.find('button').findWhere(btn => btn.text() === '10')).toEqual({});
  });

});
