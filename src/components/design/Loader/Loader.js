import React from 'react';
import PropTypes from 'prop-types';
import './Loader.scss';

function Loader(props) {
  const { status = '' } = props;
  return (
    <div className="loader-container">
      <p className="loader-content">
        {`Traffic cameras ${status}...`}
      </p>
    </div>
  )
}

Loader.propTypes = {
  status: PropTypes.string,
}

export default Loader;
