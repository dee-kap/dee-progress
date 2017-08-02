/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import BarSelector from '../../app/components/BarSelector';

chai.use(chaiEnzyme());

describe('BarList', () => {
  const wrapper = shallow(<BarSelector />);

  it('should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('has one div with class name of "control-container"', () => {
    expect(wrapper.find('.control-container')).to.have.length(1);
  });

  it('should set the name property correctly', () => {
    wrapper.setProps({ name: 'dummy' });
    expect(wrapper).to.containMatchingElement(<select name="dummy" />);
  });

  it('should set the value correctly', () => {
    wrapper.setProps({ value: 'dummy' });
    expect(wrapper).to.containMatchingElement(<select value="dummy" />);
  });

  it('should render correct number of options', () => {
    wrapper.setProps({ data: [1, 2, 3] });
    const options = wrapper.find('option');
    expect(options.length).to.eql(3);
  });
});
