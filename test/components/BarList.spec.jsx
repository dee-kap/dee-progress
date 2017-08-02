/* eslint-env mocha */
import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import BarList from '../../app/components/BarList';

chai.use(chaiEnzyme());

describe('BarList', () => {
  const wrapper = shallow(<BarList />);

  it('should be a div', () => {
    expect(wrapper.type()).to.eql('div');
  });
});
