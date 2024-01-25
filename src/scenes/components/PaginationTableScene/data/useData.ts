import { useQuery } from '@tanstack/react-query';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import { PaginationTableSceneData } from './types';
import { MOCK_REPORTS_PAGE_DATA } from './mock';

const ENDPOINT = '';

const getPaginationTableSceneData = () => {
  if (IS_MOCK_ACTIVE) {
    return MOCK_REPORTS_PAGE_DATA;
  }

  return API.get(ENDPOINT).json<PaginationTableSceneData>();
};

export const usePaginationTableSceneData = () => {
  const queryKey = [''];
  const queryFn = () => getPaginationTableSceneData();

  const { data, isFetching, error } = useQuery<PaginationTableSceneData>({
    queryKey,
    queryFn,
  });

  return { data, isFetching, error };
};
