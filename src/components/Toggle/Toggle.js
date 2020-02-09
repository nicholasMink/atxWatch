import React from 'react'
import PropTypes from 'prop-types'
import './Toggle.scss'

function Toggle(props) {
  const { isActive, onClick } = props;
  const toggleClass = `toggle ${isActive && 'toggle--active'}`;
  return (
    <div className="toggle-wrapper" onClick={onClick}>
      <button className={toggleClass} onClick={onClick} />
    </div>
  )
}

Toggle.propTypes = {
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
}

export default Toggle

