import React, { FC } from 'react';

import { usePaginationTableSceneData } from './data';

export const PaginationTableScene: FC = () => {
  const { error, isFetching } = usePaginationTableSceneData();

  if (isFetching) {
    return <>isFetching</>;
  }

  if (error) {
    return <>error</>;
  }

  return <div>data</div>;
};
