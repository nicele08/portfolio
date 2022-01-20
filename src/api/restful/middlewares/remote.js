import Constants from 'api/utils/constants';
import Factory from 'core/factory';

const RemoteServer = new Factory.Http(
  Constants.Keys.REACT_APP_DEFAULT_API_DOMAIN,
  Constants.Config.HTTP_HEADERS,
);

export default RemoteServer;
