import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Settings from './Settings';

describe('<Settings />', () => {
    it('should display three div tags', ()=> {
      const wrapper = shallow(<Settings/>);
      expect(wrapper.find('div')).to.have.length(3);
    });

    it('should call spliceName on onClick', () => {
      const handleClick = sinon.spy()
      const wrapper = mount(<Settings className='set-button' spliceName={handleClick} />)
      expect(handleClick.calledOnce).to.equal(false)
      wrapper.find('.set-button').simulate('click')
      expect(handleClick.calledOnce).to.equal(true)
    });

    it.skip('should trigger our logStuff function', ()=> {
    const logStuff = sinon.spy();
    const wrapper = mount(<Settings handleClick={logStuff}/>);
    wrapper.simulate('click');
    expect(logStuff.calledOnce).to.equal(true);
  })
});
