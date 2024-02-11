import { useMutation } from '@tanstack/react-query';

import { API } from '@api/constants';

import { RunInspectionQueryParams } from './types';

const mutationFn = (params: RunInspectionQueryParams) =>
  API.post('https://andruxnet-random-famous-quotes.p.rapidapi.com/', {
    body: JSON.stringify(params),
  }).json<void>();

export const useRunInspectionMutation = () =>
  useMutation({
    mutationFn,
  });
