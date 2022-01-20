import React from 'react';
import { withTranslation } from 'react-i18next';
import PageNotFound from 'modules/activities/PageNotFound';

const NotFoundPage = () => {
  return (
    <div className="Home bg-white h-screen">
      <PageNotFound />
    </div>
  );
};

export default withTranslation()(NotFoundPage);
