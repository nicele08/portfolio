import React from 'react';
import PropTypes from 'prop-types';
import NavbarProvider from 'modules/contexts/NavbarContext';
import ThemeProvider from 'modules/contexts/ThemeContext';
import WindowProvider from 'modules/contexts/WindowContext';

const Providers = ({ children }) => {
  return (
    <WindowProvider>
      <NavbarProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </NavbarProvider>
    </WindowProvider>
  );
};

Providers.propTypes = {
  children: PropTypes.node,
};
Providers.defaultProps = {
  children: <div />,
};

export default Providers;
