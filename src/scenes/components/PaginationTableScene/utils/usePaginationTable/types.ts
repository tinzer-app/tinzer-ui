import { Dispatch, SetStateAction } from 'react';

import { RequestParams } from '../../data';

export interface UsePaginationTableParams {
  setRequestParams: Dispatch<SetStateAction<RequestParams>>;
}
