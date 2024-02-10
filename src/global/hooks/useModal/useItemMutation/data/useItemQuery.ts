import { useMutation } from '@tanstack/react-query';

import { UseItemQueryParams } from './types';

export const useItemQuery = <QueryParamsType>({
  onErrorFetch,
  onSuccessFetch,
  mutationFn,
}: UseItemQueryParams<QueryParamsType>) =>
  useMutation({
    mutationFn,
    onSuccess: (_, params) => onSuccessFetch(params),
    onError: (_, params) => onErrorFetch(params),
  });
