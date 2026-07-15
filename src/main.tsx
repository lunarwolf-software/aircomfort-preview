import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';

/**
 * HashRouter is used deliberately: the preview must work when deployed to
 * GitHub Pages (repository subpaths) and other static hosts without any
 * server-side rewrite rules. Swap to BrowserRouter once a production host
 * with rewrites is chosen.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
