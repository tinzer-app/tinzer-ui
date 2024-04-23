import { useMutation } from '@tanstack/react-query';

import { API } from '@api/constants';

import { RunInspectionQueryParams, UseRunInspectionMutationParams } from './types';

const mutationFn = ({ id }: RunInspectionQueryParams) =>
  API.post(`inspections/${id}/runInspection`, {
    body: JSON.stringify({}),
  }).json<void>();

export const useRunInspectionMutation = ({ onSuccessFetch }: UseRunInspectionMutationParams) =>
  useMutation({
    mutationFn,
    onSuccess: onSuccessFetch,
  });
