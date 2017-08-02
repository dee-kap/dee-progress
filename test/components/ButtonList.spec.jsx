/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import ButtonList from '../../app/components/ButtonList';

chai.use(chaiEnzyme());

describe('ButtonList', () => {
  const wrapper = shallow(<ButtonList />);

  it('should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('clicking menu item', () => {
    const buttons = [{ id: 1, value: 10}, { id: 2, value: 20 }];
    const handleClickStub = spy();
    const component = mount(<ButtonList buttons={buttons} onButtonClick={handleClickStub} />);
    component.find('button').last().simulate('click');
    expect(handleClickStub.calledOnce).to.be.true; // successful
  });
});
