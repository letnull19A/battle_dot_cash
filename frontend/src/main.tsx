import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import '/node_modules/primeflex/primeflex.css';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primeicons/primeicons.css';
import './index.css';

createRoot(document.getElementById('root')!).render(<App />);
