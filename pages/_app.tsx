import React from 'react';
import type { AppProps } from 'next/app';

import 'sanitize.css';
import 'styles/app.scss';

const App: React.FC<AppProps> = ({ Component, pageProps }) => <Component {...pageProps} />;

export default App;
