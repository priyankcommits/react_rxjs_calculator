import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

Enzyme.configure({ adapter: new Adapter() });

import App from './App';

describe('App Component' , () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('renders app component', () => {
    expect(wrapper.find('h3').text()).toEqual('Calculator using React Hooks + RxJS');
  })

});
