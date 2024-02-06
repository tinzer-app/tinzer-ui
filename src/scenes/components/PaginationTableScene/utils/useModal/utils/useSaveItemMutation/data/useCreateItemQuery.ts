import { useMutation } from '@tanstack/react-query';

import { API } from '@api/constants';

import { QueryParams, UseCreateItemQueryParams } from './types';

const mutationFn = (params: QueryParams) =>
  API.post(`${params.data.type}Creating`, {
    body: JSON.stringify(params),
  }).json<void>();

export const useCreateItemQuery = ({ onErrorFetch, onSuccessFetch }: UseCreateItemQueryParams) =>
  useMutation({
    mutationFn,
    onSuccess: (_, params) => onSuccessFetch(params),
    onError: (_, params) => onErrorFetch(params),
  });
