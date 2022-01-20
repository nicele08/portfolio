import React from 'react';
import { useTheme } from 'modules/contexts/ThemeContext';

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === 'dark' ? (
        <button
          type="button"
          onClick={() => {
            return setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        >
          <i className="fas fa-sun" />
        </button>
      ) : (
        <button
          type="button"
          onClick={() => {
            return setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
          className="text-gray-500 dark:text-gray-400 text-2xl cursor-pointer"
        >
          <i className="fas fa-moon" />
        </button>
      )}
    </div>
  );
};

export default ToggleTheme;
