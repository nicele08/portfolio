import React from 'react';
import PropTypes from 'prop-types';

const TextInputField = ({ label, id }) => {
  return (
    <div>
      <label htmlFor={id}>
        <span>{label}</span>
        <input id={id} type="text" />
      </label>
    </div>
  );
};

TextInputField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
TextInputField.defaultProps = {
  label: 'Email or Username',
  id: 'input-name',
};

export default TextInputField;
