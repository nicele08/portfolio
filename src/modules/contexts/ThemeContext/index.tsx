import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

interface IContextTheme {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext<IContextTheme>(undefined);
export const useTheme = () => {
  return useContext(ThemeContext);
};

export const getInitialTheme = () => {
  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = window.localStorage.getItem('color-theme');
    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia(
      '(prefers-color-scheme: dark)',
    );
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  const rawSetTheme = rawTheme => {
    const root = window.document.documentElement;
    const isDark = rawTheme === 'dark';

    root.classList.remove(isDark ? 'light' : 'dark');
    root.classList.add(rawTheme);

    localStorage.setItem('color-theme', rawTheme);
  };

  useEffect(() => {
    rawSetTheme(theme);
  }, [theme]);

  const value = useMemo(() => {
    return { theme, setTheme };
  }, [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ThemeProvider;
