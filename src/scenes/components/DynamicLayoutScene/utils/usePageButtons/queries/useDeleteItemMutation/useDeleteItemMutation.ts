import { useMutation } from '@tanstack/react-query';

import { API } from '@api/constants';

import { DeleteItemQueryParams, UseDeleteItemMutationParams } from './types';

const mutationFn = ({ itemType, ...restParams }: DeleteItemQueryParams) =>
  API.delete(`${itemType}s/deleting`, {
    body: JSON.stringify(restParams),
  }).json<void>();

export const useDeleteItemMutation = ({ onSuccessFetch }: UseDeleteItemMutationParams) =>
  useMutation({
    mutationFn,
    onSuccess: onSuccessFetch,
  });
