import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button';
import './Input.scss';

function InputSelect(props) {
  const { items, isActive, handleSelect, placeholder, label } = props;
  const [isOptionsActive, setOptionsActive] = useState(false);
  useEffect(() => {
    setOptionsActive(false);
  }, [isActive])
  const inactiveItems = items.filter(item => item !== isActive);
  const toggleOptions = () => setOptionsActive(!isOptionsActive);
  const dropdownList = inactiveItems.map((item, i) => (
    <Button key={`${item}-${i}`} id={item} className="btn-select" onClick={handleSelect}>
      {item}
    </Button>
  ));
  const selectedItem = isActive === '' ? placeholder : isActive;
  const select = (
    <div className="input-top">
      <label htmlFor={`${label}-input`} className="input-label">{label}</label>
      <Button id={`${label}-input`} className={`btn-select btn-select--active ${isActive === '' && 'btn-select--placeholder'}`} onClick={() => toggleOptions()}>
        <span className="btn-select-content">
          {selectedItem}
          <svg className={`${isOptionsActive ? 'select arrow select-arrow-up' : 'select-arrow'}`} width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="select-toggle" d="M14.25 1.25L7.75 7.75L1.25 1.25" stroke-width="1.5" stroke-linejoin="round" />
          </svg>
        </span>
      </Button>
      {isOptionsActive && (
        <span className="input-select-options">
          {dropdownList}
        </span>
      )}
    </div>
  );
  return select;
}

InputSelect.defaultProps = {
  placeholder: 'Select option',
  label: '',
  isActive: '',
}

InputSelect.propTypes = {
  isActive: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  handleSelect: PropTypes.func,
  items: PropTypes.array,
}

export default InputSelect

