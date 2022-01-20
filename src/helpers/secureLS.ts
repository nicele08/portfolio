import SecureLS from 'secure-ls';

const set = (key, value) => {
  const ls = new SecureLS({ encodingType: 'aes' });
  ls.set(key, value);
};

const get = key => {
  const ls = new SecureLS({ encodingType: 'aes' });
  return ls.get(key);
};

const remove = key => {
  const ls = new SecureLS({ encodingType: 'aes' });
  return ls.remove(key);
};

const removeToken = () => {
  const ls = new SecureLS({ encodingType: 'aes' });
  return ls.remove(process.env.REACT_APP_ACCESS_TOKEN);
};

const setToken = value => {
  const ls = new SecureLS({ encodingType: 'aes' });
  ls.set(process.env.REACT_APP_ACCESS_TOKEN, value);
};

const getToken = () => {
  const ls = new SecureLS({ encodingType: 'aes' });
  try {
    return ls.get(process.env.REACT_APP_ACCESS_TOKEN) || null;
  } catch (error) {
    return null;
  }
};

const Secure = {
  set,
  setToken,
  get,
  getToken,
  remove,
  removeToken,
};

export default Secure;
