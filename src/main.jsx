import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MasterPasswordProvider } from './Context/MasterPassword.jsx';
import { MasterPassword } from './MasterPassword.jsx';

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <App />
  </StrictMode>
);
