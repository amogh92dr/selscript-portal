import React from 'react';
import PropTypes from 'prop-types';

const FloatyButton = ({ id, children, onClick, extraClasses, disabled }) => {
  return (
    <button
      id={id}
      type="button"
      className={`btn px3 py2 rounded ${extraClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
FloatyButton.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  extraClasses: PropTypes.string,
  disabled: PropTypes.bool,
};

FloatyButton.defaultProps = {
  id: null,
  extraClasses: '',
  disabled: false,
};
export default FloatyButton;
