import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Accordion.scss';

function Accordion(props) {
  const { defaultOpen, content, title, className } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const handleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion-wrapper">
      <Button
        onClick={() => handleAccordion()}
        className={`btn-primary accordion ${isOpen && 'accordion--active'} ${className}`}
      >
        {title}
      </Button>
      {isOpen && <span className="accordion-content">{content}</span>}
    </div>
  );
}

Accordion.defaultProps = {
  defaultOpen: false,
  className: '',
};

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.any,
};

export default Accordion;
