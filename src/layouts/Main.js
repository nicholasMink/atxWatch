import React from 'react'
import PropTypes from 'prop-types'
import './layouts.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import Button from '../components/Button/Button';

function Main(props) {
  const { activeComponent } = props;
  return (
    <main className="main-wrapper">
      {activeComponent}
    </main>
  )
}

Main.propTypes = {
  children: PropTypes.any,
}

export default Main

