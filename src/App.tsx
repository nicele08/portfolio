import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Providers from './Providers';
import routes from './pages';
import AppRoutes from './AppRoutes';

const App = () => {
  return (
    <Router>
      <Providers>
        <AppRoutes routes={routes} />
      </Providers>
    </Router>
  );
};

export default App;
