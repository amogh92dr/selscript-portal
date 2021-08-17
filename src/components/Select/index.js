import React from 'react';
import { Select as ReactSelect } from '@catapulthealth/catapult-react-components';
import PropTypes from 'prop-types';

const getCustomStyles = error => ({
  control: (provided, state) => {
    let borderColor;
    if (state.isFocused) {
      borderColor = 'var(--blue)';
    } else if (!state.isFocused && !error) {
      borderColor = 'var(--light-gray) !important';
    } else {
      borderColor = 'red';
    }
    return {
      ...provided,
      cursor: 'text',
      borderColor,
      borderRadius: '10px',
      boxShadow: state.isFocused
        ? '0 0 0 2px rgba(0, 116, 217, 0.5)'
        : 'inset 0 1px 2px rgba(27,31,35,.075)',
      height: '3.5rem',
      marginTop: '0.5rem',
    };
  },
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? 'var(--blue)' : 'var(--white)',
    cursor: 'pointer',
  }),
});

const Select = ({ error, ...restProps }) => (
  <ReactSelect styles={getCustomStyles(error)} {...restProps} />
);

Select.propTypes = {
  error: PropTypes.bool,
};

Select.defaultProps = {
  error: false,
};

export default Select;
