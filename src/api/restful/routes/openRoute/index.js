/* eslint-disable no-underscore-dangle */
class Open {
  constructor({ RemoteServer, Auth }) {
    this.Server = RemoteServer.instance;
    this._Auth = Auth;
  }

  async toPost(endpoint) {
    this.Server.post(endpoint).catch(() => {});
  }

  async create(endpoint, req) {
    return this.Server.post(endpoint, req)
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
          return { error };
        }
        return err;
      });
  }
}

export default Open;
