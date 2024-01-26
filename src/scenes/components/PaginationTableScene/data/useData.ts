import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import { getMockData } from './mock';
import { PaginationTableSceneData } from './types';

const getPaginationTableSceneData = (endpoint: string) => {
  if (IS_MOCK_ACTIVE) {
    return getMockData(endpoint);
  }

  return API.get(endpoint).json<PaginationTableSceneData>();
};

export const usePaginationTableSceneData = () => {
  const { pathname } = useLocation();

  // убираем первый символ /
  const endpoint = pathname.slice(1);
  const queryKey = [endpoint];
  const queryFn = () => getPaginationTableSceneData(endpoint);

  const { data, isFetching, error } = useQuery<PaginationTableSceneData>({
    queryKey: queryKey,
    queryFn,
  });

  return { data, isFetching, error };
};
