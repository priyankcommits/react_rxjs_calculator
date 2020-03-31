import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import ButtonLayout from './ButtonLayout';
import calculatorButtons from '../constants';

describe('ButtonLayout Component' , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ButtonLayout buttons={calculatorButtons} />);
  });

  it('renders buttons correctly with value', () => {
    expect(wrapper.find('button').findWhere(btn => btn.text() === '1')).not.toBeNull();
    expect(wrapper.find('button').findWhere(btn => btn.text() === '10')).toEqual({});
  });
});
