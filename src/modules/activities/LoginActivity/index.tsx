import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import Logo from 'modules/_partials/_drawable/icons/Logo';
import { useTheme } from 'modules/contexts/ThemeContext';
import LoginForm from './LoginForm';

const LoginActivity = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="pb-4 md:pb-6 xl:pb-8 space-y-2">
        <h1 className="flex items-center space-x-2 font-medium dark:text-gray-200">
          <Logo
            className="w-8 h-8"
            stroke={theme === 'dark' ? 'white' : 'black'}
          />
          <span className="font-bold text-xl text-black dark:text-gray-100">
            The 4Ds
          </span>
          <span>Diagnostics</span>
        </h1>
        <p className="text-gray-400 text-xs">
          Diagnose, and get solutions to bridge the gaps
        </p>
      </div>
      <LoginForm />

      <p className="mt-6 md:mt-8 text-center dark:text-gray-200">
        Not a member yet? Click{' '}
        <Link
          to="/signup"
          className="text-blue-600 dark:text-[#4cd96d] font-medium"
        >
          here
        </Link>{' '}
        to register.
      </p>
    </>
  );
};

export default withTranslation()(LoginActivity);
