import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.tsx';
import AppStoreProvider from './store/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppStoreProvider>
      <App />
    </AppStoreProvider>
  </React.StrictMode>
);
