import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import { Auth } from './view/components/Auth';
import {store} from './store/reduxStore'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter>
          <Auth />
       </BrowserRouter>
  </Provider>

);


