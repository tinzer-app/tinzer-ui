import { useQuery } from '@tanstack/react-query';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import { PaginationTableSceneData } from './types';

const ENDPOINT = '';

const getPaginationTableSceneData = () => {
  if (IS_MOCK_ACTIVE) {
    return null;
  }

  return API.get(ENDPOINT).json<PaginationTableSceneData>();
};

export const usePaginationTableSceneData = () => {
  const queryKey = [''];
  const queryFn = () => getPaginationTableSceneData();

  const { data, isFetching, error } = useQuery<PaginationTableSceneData | null>({
    queryKey,
    queryFn,
  });

  return { data, isFetching, error };
};
