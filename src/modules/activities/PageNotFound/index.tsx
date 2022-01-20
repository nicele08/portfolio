import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className="">
      404 - Page not found
      <Link to="/">Home</Link>
    </div>
  );
};

export default withTranslation()(PageNotFound);
