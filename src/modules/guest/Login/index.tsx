import React from 'react';
import loginBg from 'assets/images/login-bg-12.svg';
import LoginActivity from 'modules/activities/LoginActivity';
import ToggleTheme from 'modules/_partials/ToggleTheme';

const Login = () => {
  return (
    <div className="h-full flex w-full relative">
      <div className="right-4 md:right-8 top-4 absolute">
        <ToggleTheme />
      </div>
      <div
        className="bg-cover bg-no-repeat md:flex flex-col md:w-3/5 xl:4/6 bg-login-pattern h-full hidden"
        style={{
          backgroundImage: `url(${loginBg})`,
        }}
      >
        <h1 className="mt-auto mx-auto text-4xl mb-8 flex items-center space-x-2 font-medium">
          <span className="font-bold text-black">The 4Ds</span>
          <span className="font-light text-2xl">Diagnostics</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center h-full overflow-y-auto w-full md:w-2/5 xl:2/6 p-4 md:px-8 lg:px-24">
        <LoginActivity />
        <p className="flex mt-auto bottom-8 absolute text-center pb-2 border-b border-gray-300 dark:text-gray-400 text-xs">
          &copy; Copyright {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Login;
