import React from 'react'
import PropTypes from 'prop-types'
import './Sidebar.scss'
import Button from '../Button/Button'

function Sidebar(props) {
  const componentsList = props.components.map(component => (
    <Button key={component} id={component} className={`btn-link ${props.isActive === component && 'btn-link--active'}`} onClick={props.onClick}>
      {component}
    </Button>
  ));
  return (
    <div className="sidebar-wrapper">
      {componentsList}
    </div>
  )
}

Sidebar.propTypes = {
  children: PropTypes.any,
}

export default Sidebar

