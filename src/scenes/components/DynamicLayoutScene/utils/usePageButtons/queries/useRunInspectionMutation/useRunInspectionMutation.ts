import { useMutation } from '@tanstack/react-query';

import { API } from '@api/constants';

import { RunInspectionQueryParams } from './types';

const mutationFn = (params: RunInspectionQueryParams) =>
  API.post('', {
    body: JSON.stringify(params),
  }).json<void>();

export const useRunInspectionMutation = () =>
  useMutation({
    mutationFn,
  });
