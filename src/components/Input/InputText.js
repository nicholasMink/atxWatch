import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function InputText(props) {
  const { label, labelPosition, placeholder, onChange, inputValue } = props;
  return (
    <div className={`input-${labelPosition}`}>
      <label className="input-label" htmlFor={`${label}-input`}>
        {props.label}
      </label>
      <input
        placeholder={placeholder}
        id={`${label}-input`}
        name={label}
        className="input"
        value={inputValue}
        type="text"
        onChange={onChange}
      />
    </div>
  );
}

InputText.propTypes = {
  labelPosition: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputText;
