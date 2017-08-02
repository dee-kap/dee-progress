import React from 'react';
import PropTypes from 'prop-types';

/**
 * Displays a list of buttons based on buttons data
 */
const ButtonList = ({ buttons, onButtonClick }) => {
  let buttonList = [];

  /**
   * Button click event handler
   * Calls onButtonClick function which is passed in as a prop
   */
  const handleButtonClick = (event) => {
    const newValue = parseInt(event.target.value);
    onButtonClick(newValue);
  };

  // create a list of button components
  if (buttons && buttons.length > 0) {
    buttonList = buttons.map((button, index) => {
      return (
        <button
          className="control btn btn-primary"
          onClick={handleButtonClick}
          key={index}
          value={button.value}
        >{button.value}</button>
      );
    });
  }

  return (
    <div className="control-container">
      { buttonList }
    </div>
  );
};

ButtonList.propTypes = {
  // array of button objects
  buttons: PropTypes.array.isRequired,
  // click handler for button
  onButtonClick: PropTypes.func,
};

ButtonList.defaultProps = {
  onButtonClick: null,
};

export default ButtonList;