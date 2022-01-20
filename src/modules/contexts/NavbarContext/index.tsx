import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Secure from 'helpers/secureLS';

export const NavbarContext = createContext({});
export const useNavbar = () => {
  return useContext(NavbarContext);
};

const NavbarProvider = ({ children }) => {
  const [currentTab, setCurrentTab] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(1);
  const [resize, setResize] = useState(
    localStorage.getItem('jyGgY3gSGN') === 'true',
  );

  const { i18n } = useTranslation();

  const language = Secure.get('setLANG');

  const onLoadLanguage = useCallback(() => {
    if (language) {
      i18n.changeLanguage(language || 'en');
    }
  }, [language, i18n]);

  useEffect(() => {
    onLoadLanguage();
  }, [onLoadLanguage]);

  const value = useMemo(() => {
    return {
      resize,
      currentTab,
      currentIndex,
      setResize,
      setCurrentTab,
      setCurrentIndex,
    };
  }, [resize, currentTab, currentIndex]);

  return (
    <NavbarContext.Provider value={value}>
      {children}
    </NavbarContext.Provider>
  );
};

NavbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavbarProvider;
