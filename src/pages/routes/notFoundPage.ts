import NotFoundPage from 'modules/activities/PageNotFound';

export default {
  name: 'Page Not Found',
  protected: false,
  guestOnly: false,
  path: '*',
  component: NotFoundPage,
};
