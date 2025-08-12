try {
  const k = localStorage.getItem('i18nextLng');
  if (k === 'nl') localStorage.setItem('i18nextLng', 'aze');
} catch (_) {}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
import { DataProvider } from './context/DataContext';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DataProvider>
      <RouterProvider router={router} />
    </DataProvider>
  </StrictMode>
);
