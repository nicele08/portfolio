import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ className, stroke }) => {
  return (
    <svg
      width="225"
      height="225"
      viewBox="0 0 225 225"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M110.8 114.5L168.6 56.7M173.8 151.5L187.4 137.9L173.8 151.5ZM35.4 89.9L64.5 60.9L35.4 89.9ZM89.4 34.9V35.9V34.9ZM137.4 187.9L136.8 187.5L137.4 187.9ZM36.6 138.7L36.8 138.5L36.6 138.7ZM56.1 169.1L83.8 141.5L56.1 169.1ZM63.8 111.5L138.1 37.1L63.8 111.5ZM87.1 188.1L187.6 87.6L87.1 188.1Z"
        stroke={stroke}
        strokeWidth="20"
        strokeMiterlimit="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  stroke: PropTypes.string,
};

Logo.defaultProps = {
  className: '',
  stroke: 'black',
};

export default Logo;
