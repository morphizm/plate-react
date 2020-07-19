import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './slices/index.js';
import ThemeProvider from './ThemeProvider.js';
import Welcome from './components/Welcome/Welcome.js';
import './assets/styles/styles.scss';
// import 'fontsource-roboto';

const App = () => {
  i18next
    .use(initReactI18next)
    .init({
      fallbackLng: 'en',
      debug: false,
      resources: {
        en: {
          translation: {},
        },
      },
    });

  const history = createBrowserHistory();
  const store = configureStore({
    reducer,
  });

  const vdom = (
    <Provider store={store}>
      <ThemeProvider>
        <Router history={history}>
          <Welcome />
        </Router>
      </ThemeProvider>
    </Provider>
  );
  return vdom;
};

export default App;
