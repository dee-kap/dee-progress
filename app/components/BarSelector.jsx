import React from 'react';
import PropTypes from 'prop-types';

/**
 * Select element allows users to select the active bar
 * By default first bar is selected
 */
const BarSelector = ({ name, value, data, onChange }) => {
  let items = [];
  let select = null;

  if (data) {
    items = data.map((item, index) => {
      const text = `#progress ${item}`;
      return (<option key={index} value={item}>{text}</option>);
    });
  }

  select = (
    <select name={name} value={value} onChange={onChange}>
      {items}
    </select>
  );

  return (
    <div className="control-container">
      {select}
    </div>
  );
};

BarSelector.propTypes = {
  // name given to the select element
  name: PropTypes.string.isRequired,
  // current value. This changes based on the selection
  value: PropTypes.string.isRequired,
  // data to be displayed as options
  data: PropTypes.array,
  // triggered when the selection changes
  onChange: PropTypes.func,

};

BarSelector.defaultProps = {
  data: [],
  onChange: null,
};

export default BarSelector;