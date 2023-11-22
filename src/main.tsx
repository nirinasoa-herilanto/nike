import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.tsx';
import AppStoreProvider from './store/index.tsx';

import { Layout } from './components/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <Layout>
        <App />
      </Layout>
    </AppStoreProvider>
  </React.StrictMode>
);
