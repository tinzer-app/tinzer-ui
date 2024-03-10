import { useQuery } from '@tanstack/react-query';
import { useLocation, useParams } from 'react-router-dom';

import { API, IS_MOCK_ACTIVE } from '@api/constants';

import { getMockData } from './mock';
import { ResponseData } from './getParsedDynamicLayoutData';

const getDynamicLayoutSceneData = (endpoint: string) => {
  if (IS_MOCK_ACTIVE) {
    return getMockData(endpoint);
  }

  return API.get(endpoint).json<ResponseData>();
};

export const useDynamicLayoutSceneData = () => {
  const { itemId = '' } = useParams();
  const { pathname } = useLocation();

  const endpoint = `${pathname.split('/')[1]}/${itemId}`;

  const queryKey = [endpoint];
  const queryFn = () => getDynamicLayoutSceneData(endpoint);

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
