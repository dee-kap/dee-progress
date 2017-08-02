import React from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';

/**
 * Displays a list of Bars
 */
const BarList = ({ bars }) => {
  let barList = [];

  // create Bar components for each bar in the bars prop
  if (bars && bars.length > 0) {
    barList = bars.map((bar, index) => {
      return (<Bar value={bar.value} key={index} />);
    });
  }

  return (
    <div className="bar-list">
      { barList }
    </div>
  );
};

BarList.propTypes = {
  // array of bar objects
  bars: PropTypes.array.isRequired,
};

export default BarList;