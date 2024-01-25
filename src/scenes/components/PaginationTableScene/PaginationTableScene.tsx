import React, { FC } from 'react';

import { Table } from '@components/Table';
import { PageLayout } from '@components/PageLayout';

import { usePaginationTableSceneData } from './data';

export const PaginationTableScene: FC = () => {
  const { error, isFetching, data } = usePaginationTableSceneData();

  const { tableData, title } = data || {};
  const isDataEmpty = !(tableData?.rows?.length && title);

  return (
    <PageLayout title={title!} isLoading={isFetching} isDataEmpty={isDataEmpty} error={error}>
      <Table data={tableData!} />
    </PageLayout>
  );
};
