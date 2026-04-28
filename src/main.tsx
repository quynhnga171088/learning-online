import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

import router from '@/router.tsx';
import { queryClient } from 'app/config/query-client';
import initStore from 'app/config/store';

import './index.scss';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

export const store = initStore();

const persistTor = persistStore(store);

createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <PersistGate loading={null} persistor={persistTor}>
          <RouterProvider router={router} />
        </PersistGate>
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
