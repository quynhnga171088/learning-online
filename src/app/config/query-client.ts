import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { QueryClient } from '@tanstack/react-query';
import { persistQueryClient } from '@tanstack/react-query-persist-client';

const PERSIST_CACHE_KEY = 'common-query-cache';

/* Setting 24h for all day */
const GC_TIME = 24 * 60 * 60 * 1000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: GC_TIME,
      retry: 1
    }
  }
});

const localStoragePersister = createSyncStoragePersister({
  storage: window.localStorage,
  key: PERSIST_CACHE_KEY
});

persistQueryClient({
  queryClient: queryClient,
  persister: localStoragePersister,
  maxAge: GC_TIME
});