import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Secure from 'helpers/secureLS';

const LanguageSwitcher = ({ className }) => {
  const { i18n } = useTranslation();
  return (
    <select
      name="language"
      className={className}
      value={
        Secure.get('setLANG') ||
        localStorage.getItem('i18nextLng') ||
        'en'
      }
      onChange={({ target }) => {
        const { value } = target;
        i18n.changeLanguage(value);
        Secure.set('setLANG', value);
      }}
    >
      <option value="en">En</option>
      <option value="fr">Fr</option>
    </select>
  );
};

LanguageSwitcher.propTypes = {
  className: PropTypes.string,
};
LanguageSwitcher.defaultProps = {
  className: '',
};

export default LanguageSwitcher;
