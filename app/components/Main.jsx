import React from 'react';
import PropTypes from 'prop-types';
import BarSelector from './BarSelector';
import ButtonList from './ButtonList';
import BarList from './BarList';

/**
 * Main component for the application
 * This component composes the user interface with child components
 */
const Main = ({ bars, buttons, selectBar, changeBarValue }) => {
  let selectedBarId = '';

  if (bars && bars.length > 0) {
    selectedBarId = bars.find(bar => bar.selected).id;
  }

  const barSelectorData = bars.map((bar) => {
    return bar.id;
  });

  const onBarSelect = (event) => {
    selectBar(event.target.value);
  };

  return (
    <div>
      <h1>Progress Bars Demo</h1>
      <BarList bars={bars} />
      <div className="control-container">
        <BarSelector name="barSelector" value={selectedBarId} data={barSelectorData} onChange={onBarSelect} />
        <ButtonList buttons={buttons} onButtonClick={changeBarValue} />
      </div>
    </div>
  );
};

Main.propTypes = {
  // array of bars
  bars: PropTypes.array.isRequired,
  // array of buttons
  buttons: PropTypes.array.isRequired,
  // action to select a bar
  selectBar: PropTypes.func.isRequired,
  // action to change value of selected bar
  changeBarValue: PropTypes.func.isRequired,
};

Main.defaultProps = {
  bars: [],
  buttons: [],
};

export default Main;