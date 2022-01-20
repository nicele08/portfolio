import Router from './routes';
import Middleware from './middlewares';

const { RemoteServer, Auth } = Middleware;

const forwards = {
  RemoteServer,
  Auth,
};

const OpenRoute = new Router.Open(forwards);
const AuthRoute = new Router.Auth(forwards);
const GetRoute = new Router.Get(forwards);
const PostRoute = new Router.Post(forwards);

const DefaultApi = {
  OpenRoute,
  AuthRoute,
  GetRoute,
  PostRoute,
};

export const DirectSupport = {
  OpenRoute,
  GetRoute,
};

export default DefaultApi;
