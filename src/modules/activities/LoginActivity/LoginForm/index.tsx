import React from 'react';
import TextInputField from 'modules/_partials/TextField';
import PasswordField from 'modules/_partials/PasswordField';

const LoginForm = () => {
  return (
    <form className="w-full">
      <div className="flex flex-col w-full">
        <TextInputField />
        <div className="my-3 md:my-4 w-full">
          <PasswordField />
        </div>
        <label
          className="flex items-center space-x-3"
          htmlFor="remember-me"
        >
          <input
            id="remember-me"
            className="w-5 h-5 "
            type="checkbox"
          />
          <span className="dark:text-gray-200 text-xs">
            Remember Me
          </span>
        </label>
        <button
          type="submit"
          className="mx-auto px-16 md:px-24 py-3 mt-4 md:mt-8 bg-[#4cd96d] text-white font-medium rounded-full"
        >
          Sign In
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
