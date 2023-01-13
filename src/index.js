import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import ProductProvider from './Contexts/ProductContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  // </ProductProvider>
);