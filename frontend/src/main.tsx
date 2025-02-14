import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '/node_modules/primeflex/primeflex.css';
import './index.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';

if (import.meta.env.MODE === 'development') {
  const eruda = await import('eruda/eruda.js');
  eruda.init();
}

createRoot(document.getElementById('root')!).render(<App />);
