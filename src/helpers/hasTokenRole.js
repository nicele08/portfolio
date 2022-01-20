import jwtDecode from 'jwt-decode';
import Secure from './secureLS';

export default (baseRoles, token = Secure.getToken()) => {
  try {
    const { payload } = jwtDecode(token);

    if (payload) {
      if (Array.isArray(payload.roles) && Array.isArray(baseRoles)) {
        return baseRoles.some(role => {
          return payload.roles.includes(role);
        });
      }
    }

    return true;
  } catch (error) {
    return false;
  }
};
