import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Layout } from './layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <div className='container'>
          <Layout index={true}/>
        </div>
      </HashRouter>
    </Provider>
  </React.StrictMode>
);
