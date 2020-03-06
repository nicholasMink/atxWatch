import React from 'react';
import PropTypes from 'prop-types';
import './Text.scss';

const Text = props => {
  const { size, children, className, light, uppercase, bold, letterSpacing } = props;
  const TEXT = {
    normal: (
      <p
        className={`text-normal ${light ? 'text-normal-light' : ''} ${
          uppercase ? 'uppercase' : ''
        } ${bold ? 'bold' : ''} ${letterSpacing ? 'letter-spacing' : ''}`}
      >
        {children}
      </p>
    ),
    small: (
      <p
        className={`text-small ${light ? 'text-small-light' : ''} ${uppercase ? 'uppercase' : ''} ${
          bold ? 'bold' : ''
        } ${letterSpacing ? 'letter-spacing' : ''}`}
      >
        {children}
      </p>
    ),
    large: (
      <p
        className={`text-large ${light ? 'text-large-light' : ''} ${uppercase ? 'uppercase' : ''} ${
          bold ? 'bold' : ''
        } ${letterSpacing ? 'letter-spacing' : ''}`}
      >
        {children}
      </p>
    ),
    custom: <p className={className}>{children}</p>,
  };
  return TEXT[size];
};

Text.defaultProps = {
  size: 'normal',
  light: false,
  uppercase: false,
  bold: false,
  letterSpacing: false,
  className: '',
};

Text.propTypes = {
  size: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool,
  bold: PropTypes.bool,
  letterSpacing: PropTypes.bool,
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Text;
