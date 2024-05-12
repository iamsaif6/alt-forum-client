import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Router';
import { ThemeProvider } from '@material-tailwind/react';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './Routes/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster position="top-right" />
    </ThemeProvider>
  </React.StrictMode>
);
