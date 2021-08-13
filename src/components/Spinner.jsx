import React from 'react';
import PropTypes from 'prop-types';

export default function Spinner({ msg }) {
  return (
    <div className="block m3 center col-12">
      <div className="fa fa-fw fa-spin fa-spinner" style={{ fontSize: '5em' }} />
      {msg && (
        <div className="py2" style={{ fontSize: '21px' }}>
          {msg}
        </div>
      )}
    </div>
  );
}

Spinner.propTypes = {
  msg: PropTypes.string,
};

Spinner.defaultProps = {
  msg: null,
};
