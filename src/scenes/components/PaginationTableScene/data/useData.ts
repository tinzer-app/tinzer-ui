import { useLocation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import { getMockData } from './mock';
import { RequestParams } from './types';
import { ResponseData, getParsedPaginationSceneData } from './getParsedPaginationSceneData';
import { useState } from 'react';

const getPaginationTableSceneData = (endpoint: string, requestParams: RequestParams) => {
  if (IS_MOCK_ACTIVE) {
    return getMockData(endpoint);
  }

  return API.get(endpoint, {
    body: JSON.stringify(requestParams),
  }).json<ResponseData>();
};

export const usePaginationTableSceneData = () => {
  const [requestParams, setRequestParams] = useState<RequestParams>({ currentPaginationPage: 1 });

  const { pathname } = useLocation();

  // убираем первый символ /
  const endpoint = pathname.slice(1);
  const queryKey = [endpoint, requestParams];
  const queryFn = () => getPaginationTableSceneData(endpoint, requestParams);

  const {
    data: responseData,
    isFetching,
    error,
  } = useQuery<ResponseData>({
    queryKey: queryKey,
    queryFn,
  });

  const data = getParsedPaginationSceneData(responseData);

  return { data, isFetching, error, setRequestParams };
};
