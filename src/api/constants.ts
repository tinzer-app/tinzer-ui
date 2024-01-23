import ky from 'ky';
import { QueryClient } from '@tanstack/react-query';

const BASE_API_URL = '';

export const queryClient = new QueryClient();

export const API = ky.create({
  prefixUrl: BASE_API_URL,
  headers: {
    'content-type': 'application/json',
  },
});

export const IS_MOCK_ACTIVE = true;
