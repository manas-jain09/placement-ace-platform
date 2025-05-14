
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make environment variables available
if (import.meta.env) {
  window.process = {
    ...window.process,
    env: {
      ...window.process?.env,
      EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    }
  };
}

createRoot(document.getElementById("root")!).render(<App />);
