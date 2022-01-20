/* eslint-disable no-param-reassign */
import Secure from 'helpers/secureLS';

export const customHeader = (
  httpInstance,
  token = Secure.getToken(),
) => {
  const { i18nextLng } = localStorage;

  httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  httpInstance.defaults.headers.common.ContentType =
    'multipart/form-data';
  httpInstance.defaults.headers.common.lang = i18nextLng || 'en';
};

export const deliveryHeader = (httpInstance, token) => {
  const { i18nextLng } = localStorage;

  httpInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  httpInstance.defaults.headers.common.ContentType =
    'multipart/form-data';
  httpInstance.defaults.headers.common.lang = i18nextLng || 'en';
};

export const userPayload = req => {
  const thirdUser = req.sender.id;
  const appThird = req.recipient.id;
  const { userType } = req;

  return { appThird, thirdUser, userType };
};
