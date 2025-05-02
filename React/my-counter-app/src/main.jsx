import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import CounterApp from './App';
import './App.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CounterApp />
  </StrictMode>,
)


// When we run this app, main.jsx mounts the CounterApp component to the root of HTML in index.html
