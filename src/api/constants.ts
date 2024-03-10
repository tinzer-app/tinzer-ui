import ky from 'ky';
import { QueryClient } from '@tanstack/react-query';

const BASE_API_URL = 'http://localhost:3000/api/v1/';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
      refetchOnWindowFocus: false,
    },
  },
});

export const API = ky.create({
  prefixUrl: BASE_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export const IS_MOCK_ACTIVE = false;
