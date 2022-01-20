import axios from 'axios';

class Http {
  constructor(baseURL, headers) {
    this.instance = axios.create({ baseURL, headers });
  }
}
export default Http;
