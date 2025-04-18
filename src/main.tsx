// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/Store';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css';

// ⚠️ Thay CLIENT_ID bên dưới bằng Google Client ID của bạn từ Google Cloud Console
const GOOGLE_CLIENT_ID = "1019061840273-tersr1q9c3nkps63s7urqmml1u95ksqr.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <Provider store={store}>
        <App />
      </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
