import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import { getMockData } from './mock';
import { RequestParams } from './types';
import { ResponseData } from './getParsedDynamicLayoutData';

const getDynamicLayoutSceneData = (endpoint: string, requestParams: RequestParams) => {
  if (IS_MOCK_ACTIVE) {
    return getMockData(endpoint);
  }

  return API.get(endpoint, {
    body: JSON.stringify(requestParams),
  }).json<ResponseData>();
};

export const useDynamicLayoutSceneData = () => {
  const { itemId = '' } = useParams();
  const { pathname } = useLocation();

  const endpoint = pathname.split('/')[1];
  const requestParams = { itemId };

  const queryKey = [endpoint, requestParams];
  const queryFn = () => getDynamicLayoutSceneData(endpoint, requestParams);

  const {
    data: responseData,
    isFetching,
    error,
    refetch,
  } = useQuery<ResponseData>({
    queryKey,
    queryFn,
  });

  return { isFetching, error, responseData, refetch };
};
