import React from 'react';
import PropTypes from 'prop-types';

const PasswordField = ({ label, id }) => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => {
    return event => {
      setValues({ ...values, [prop]: event.target.value });
    };
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <label htmlFor={id}>
      <span>{label}</span>
      <input
        id={id}
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
      />
    </label>
  );
};

PasswordField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
};
PasswordField.defaultProps = {
  label: 'Password',
  id: 'input-password',
};

export default PasswordField;
