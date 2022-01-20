/* eslint-disable no-underscore-dangle */
class Get {
  constructor({ RemoteServer, Auth }) {
    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async getRoute(endpoint, req) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.get(endpoint, req)
      .then(res => {
        const { data } = res;
        if (data) {
          return data;
        }
        return res;
      })
      .catch(err => {
        if (err.response) {
          const { data } = err.response;
          const { error } = data;
          if (error) {
            if (typeof error === 'string') {
              error.somethingWrong = error;
            } else {
              error.somethingWrong = 'somethingWentWrong';
            }
          }
          return { error };
        }
        return err;
      });
  }
}
export default Get;
