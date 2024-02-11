import { API } from '@api/constants';

import { QueryParams } from './types';

export const mutationFn = (params: QueryParams) =>
  API.post(`${params.data.type}Editing`, {
    body: JSON.stringify(params),
  }).json<void>();
