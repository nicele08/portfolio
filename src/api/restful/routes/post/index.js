/* eslint-disable no-underscore-dangle */
class Post {
  constructor({ RemoteServer, Auth }) {
    this.SERVER = RemoteServer.instance;
    this._Auth = Auth;
  }

  async postRoute(endpoint, req) {
    this._Auth.customHeader(this.SERVER);

    return this.SERVER.post(endpoint, req)
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
export default Post;
