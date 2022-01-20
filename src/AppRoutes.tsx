import React from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, Navigate } from 'react-router-dom';
import isAuth from 'helpers/isAuth';

interface IRoute {
  name: string;
  protected: boolean;
  guestOnly: boolean;
  path: string;
  component: () => JSX.Element;
}

export const toDashboard = () => {};
export const toBase = () => {};

const Element = ({ route }) => {
  const excludes = ['/', '/login'];
  const Component = route.component;
  if (route.guestOnly && isAuth()) {
    return <Navigate to="/" />;
  }
  if (route.protected && !isAuth()) {
    return <Navigate to="/" />;
  }
  if (excludes.includes(route.path) && isAuth()) {
    return <Navigate to="/dashboard" />;
  }

  if (route.name) {
    document.title = route.name;
  }
  return <Component />;
};

const AppRoutes = ({ routes }) => {
  const renderRoute = (route: IRoute) => {
    return (
      <Route
        key={route.name}
        path={route.path}
        element={<Element route={route} />}
      />
    );
  };

  return (
    <Routes>
      {routes.map((route: IRoute) => {
        return renderRoute(route);
      })}
    </Routes>
  );
};

AppRoutes.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  match: PropTypes.shape({}),
  routes: PropTypes.instanceOf(Array),
};

AppRoutes.defaultProps = {
  location: {},
  history: {},
  match: {},
  routes: [],
};

export default AppRoutes;
