import { useMutation } from '@tanstack/react-query';

import { API } from '@api/constants';

import { DeleteItemQueryParams, UseDeleteItemMutationParams } from './types';

const mutationFn = (params: DeleteItemQueryParams) =>
  API.delete('', {
    body: JSON.stringify(params),
  }).json<void>();

export const useDeleteItemMutation = ({ onSuccessFetch }: UseDeleteItemMutationParams) =>
  useMutation({
    mutationFn,
    onSuccess: onSuccessFetch,
  });
