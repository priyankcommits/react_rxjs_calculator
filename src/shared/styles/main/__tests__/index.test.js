import 'jest-styled-components'
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });;

import { InputBox } from '../../../../components/index';

describe('BoxStyled Style Component', () => {
  it('renders box style with correct properties', () => {
    const wrapper = mount(<InputBox />);
    expect(wrapper.find('div')).toHaveStyleRule('border-style', 'double');
    expect(wrapper.find('div')).toHaveStyleRule('border-color', 'lightgray');
    expect(wrapper.find('div')).toHaveStyleRule('border-radius', '5px');
    expect(wrapper.find('div')).toHaveStyleRule('text-align', 'right');
    expect(wrapper.find('div')).toHaveStyleRule('min-height', '50px');
  });
});

describe('OverFlowProtect Style Component', () => {
  it('renders box style with correct properties', () => {
    const wrapper = mount(<InputBox />);
    wrapper.debug();
    expect(wrapper.find('div').last()).toHaveStyleRule('overflow-wrap', 'break-word');
  });
});
