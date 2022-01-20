import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/index.css';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import i18n from 'i18n';
import loadIcons from 'config/icon-loader';
import App from './App';
import getStore from './config/store';

loadIcons();

const store = getStore();

const rootEl = document.getElementById('root');

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>,
  rootEl,
);
