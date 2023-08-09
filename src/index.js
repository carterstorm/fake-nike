import React from 'react';
import ReactDOM from 'react-dom/client';
import { StyleSheetManager, ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import isPropsValid from '@emotion/is-prop-valid'
import App from './App';
import { GlobalStyle } from './GlobalStyle';
import { theme } from './theme';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropsValid} disableVendorPrefixes={false}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </StyleSheetManager>
  </React.StrictMode>
);