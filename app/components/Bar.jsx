import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a bar with a value displayed as percentage.
 */
const Bar = ({ value }) => {
  // width is set based on the value prop
  // if the value is less than 100 then the width remains 100
  // else whatever the value is
  const width = value >= 100 ? 100 : value;

  // background is set to either red or something like green 
  // if the value is greater than 100 the color is red
  // else it is the other color
  const background = value >= 100 ? 'red' : '#99BCC8';

  const barStyle = {
    width: `${width}%`,
    background,
  };

  return (
    <div className="bar-container">
      {value}%
      <div className="bar" style={barStyle} />
    </div>
  );
};

Bar.propTypes = {
  // value is the text displayed on the button
  value: PropTypes.number.isRequired,
};

export default Bar;