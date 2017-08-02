/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Bar from '../../app/components/Bar';

chai.use(chaiEnzyme());

describe('Bar', () => {
  const wrapper = shallow(<Bar />);

  it('should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });

  it('has one div with class name of "bar-container"', () => {
    expect(wrapper.find('.bar-container')).to.have.length(1);
  });

  it('has one div with class name of "bar"', () => {
    expect(wrapper.find('.bar')).to.have.length(1);
  });

  it('should apply red color when value is > 100', () => {
    wrapper.setProps({ value: 101 });
    const bar = wrapper.find('.bar');
    expect(bar).to.have.style('background').equal('red');
  });

  it('should apply red color when value is = 100', () => {
    wrapper.setProps({ value: 100 });
    const bar = wrapper.find('.bar');
    expect(bar).to.have.style('background').equal('red');
  });

  it('should apply #99BCC8 color when value is < 100', () => {
    wrapper.setProps({ value: 54 });
    const bar = wrapper.find('.bar');
    expect(bar).to.have.style('background').equal('#99BCC8');
  });

  it('should set the width equal to value when value is < 100', () => {
    wrapper.setProps({ value: 34 });
    const bar = wrapper.find('.bar');
    expect(bar).to.have.style('width').equal('34%');
  });

  it('should set the width equal to value when value is = 100', () => {
    wrapper.setProps({ value: 100 });
    const bar = wrapper.find('.bar');
    expect(bar).to.have.style('width').equal('100%');
  });

  it('should set the width equal to 100 when value is > 100', () => {
    wrapper.setProps({ value: 107 });
    const bar = wrapper.find('.bar');
    expect(bar).to.have.style('width').equal('100%');
  });

});