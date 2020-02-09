import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'

function Button(props) {
  const { id, className, onClick, disabled } = props;
  return (
    <button
      id={id}
      onClick={onClick}
      className={className}
      disabled={disabled}
    >
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  id: '',
  disabled: false,
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
}

export default Button
