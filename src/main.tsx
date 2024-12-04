import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <RecentlyViewedProvider>
        <App />
      </RecentlyViewedProvider>
    </BrowserRouter>
  </StrictMode>
);