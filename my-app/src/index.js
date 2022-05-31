import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import{Provider} from 'react-redux';//чтобы стор работал нужно провайдер из редакса
import{store} from 'store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    {/* оборачиваем приложение в провайдер из реакт редакса. Он захочет порлучить стор, поэтому мы его импортируем*/}
    <Provider store = {store}>
      <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
