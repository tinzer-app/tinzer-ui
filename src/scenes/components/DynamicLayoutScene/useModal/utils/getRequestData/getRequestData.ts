import { getRequestData as getRequestDataCore } from '@scenes/components/PaginationTableScene';

import { GetRequestDataParams } from './types';

export const getRequestData = ({ id, ...otherParams }: GetRequestDataParams) => {
  const requestData = getRequestDataCore(otherParams);

  return (
    requestData && {
      ...requestData,
      id,
    }
  );
};
