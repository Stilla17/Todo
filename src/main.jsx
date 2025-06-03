import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import './index.css'
import App from './App.jsx'

import { AuthProvider } from './Components/AuthContext/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
        <StrictMode>
          <App />
        </StrictMode>
      </AuthProvider>
    </Provider>
  </BrowserRouter>
  ,
)
