import React from 'react';
import PropTypes from 'prop-types';
import './layouts.scss';

function Header(props) {
  return (
    <header className="header-wrapper">
      <h2 className="header-title">{props.title}</h2>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
