import React from 'react';
import PropTypes from 'prop-types';
import './layouts.scss';

function Main(props) {
  const { activeComponent } = props;
  return <main className="main-wrapper">{activeComponent}</main>;
}

Main.propTypes = {
  children: PropTypes.any,
};

export default Main;
