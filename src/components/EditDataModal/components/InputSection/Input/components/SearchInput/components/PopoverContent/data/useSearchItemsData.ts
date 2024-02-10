import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import {
  GetSearchItemsDataParams,
  QueryParams,
  ResponseData,
  UseSearchItemsDataParams,
} from './types';
import { getMockData } from './mocks';

const getSearchItemsData = ({ endpoint, queryParams }: GetSearchItemsDataParams) => {
  if (IS_MOCK_ACTIVE) {
    return getMockData(endpoint);
  }

  return API.post(endpoint, {
    body: JSON.stringify(queryParams),
  }).json<ResponseData>();
};

export const useSearchItemsData = ({ config }: UseSearchItemsDataParams) => {
  const { endpoint } = config;

  const [queryParams, setQueryParams] = useState<QueryParams>({});

  const queryKey = [endpoint, queryParams];
  const queryFn = () => getSearchItemsData({ endpoint, queryParams });

  const { data, isFetching, error } = useQuery({ queryKey, queryFn });

  return { data, isFetching, error, setQueryParams };
};
