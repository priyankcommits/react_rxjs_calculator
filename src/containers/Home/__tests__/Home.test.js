import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import { Home } from '../Home';

describe('Home Component' , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Home />);
  });

  it('renders home component', () => {
    expect(wrapper.find('h3').text()).toEqual('Calculator using React Hooks + RxJS');
  });

});
