import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import InputArea from './inputArea';

describe('<InputArea />', () => {
  it('should display a single input tag', ()=> {
    const wrapper = shallow(<InputArea/>);
    expect(wrapper.find('input')).to.have.length(1);
  });

  it('should display a single div tag', ()=> {
    const wrapper = shallow(<InputArea/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
