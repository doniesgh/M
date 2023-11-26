import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'tailwindcss/tailwind.css';
import { ProductsContextProvider } from './context/ProductsContext'
import { AuthContextProvider } from './context/AuthContext'
import { UsersContextProviders } from './context/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersContextProviders>
    <ProductsContextProvider>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
    </ProductsContextProvider>
    </UsersContextProviders>
  </React.StrictMode>
);