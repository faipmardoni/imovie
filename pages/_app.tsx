import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from 'store';

import 'sanitize.css';
import 'styles/app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
