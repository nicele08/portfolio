import LoginPage from 'modules/guest/Login';

export default {
  name: 'Login',
  protected: false,
  guestOnly: true,
  path: '/login',
  component: LoginPage,
};
