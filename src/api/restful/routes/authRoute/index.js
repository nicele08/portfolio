/* eslint-disable no-underscore-dangle */
class AuthRoute {
  constructor({ RemoteServer, Auth }) {
    this.Server = RemoteServer.instance;
    this._Auth = Auth;
  }

  async toGet(endpoint) {
    this.Server.get(endpoint).catch(() => {});
  }
}
export default AuthRoute;
