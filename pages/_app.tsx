import React from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { useStore } from 'store';

import 'sanitize.css';
import 'styles/app.scss';

interface Props extends AppProps {
  pageProps: any;
}

const App: NextPage<Props> = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
