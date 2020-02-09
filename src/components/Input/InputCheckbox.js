import React from 'react'
import PropTypes from 'prop-types'
import './Input.scss'

function InputCheckbox(props) {
  const { isActive, label, onChange } = props;
  return (
    <div className="input-right">
      <input id={`${label}-checkbox`} onChange={onChange} type="checkbox" className="input-hidden" checked={isActive} />
      <svg onClick={onChange} width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.5 4V14C0.5 15.6569 1.84315 17 3.5 17H13.5C15.1569 17 16.5 15.6569 16.5 14V4C16.5 2.34315 15.1569 1 13.5 1H3.5C1.84315 1 0.5 2.34315 0.5 4Z" stroke={`${isActive ? '#777' : '#aaa'}`} strokeWidth="1.15" />
        <path className={isActive ? 'input-check' : ''} d="M3.5 9.5L7.1744 13.1744C7.60825 13.6082 8.32688 13.5527 8.68889 13.0573L17.5 1" stroke={isActive ? '#009688' : 'transparent'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <label htmlFor={`${label}-checkbox`} className="input-label-checkbox">
        {label}
      </label>
    </div>
  )
}

InputCheckbox.defaultProps = {
  isActive: false,
  label: '',
}

InputCheckbox.propTypes = {
  isActive: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
}

export default InputCheckbox
