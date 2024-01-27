import React, { FC } from 'react';

import { Table } from '@components/Table';
import { PageLayout } from '@components/PageLayout';

import { Pagination } from './styled';
import { usePaginationTableSceneData } from './data';

export const PaginationTableScene: FC = () => {
  const { error, isFetching, data } = usePaginationTableSceneData();

  const { tableData, title, paginationData } = data || {};
  const isDataEmpty = !(tableData?.rows?.length && title && paginationData);

  const { pagesCount, currentPage } = paginationData || {};

  return (
    <PageLayout title={title!} isLoading={isFetching} isDataEmpty={isDataEmpty} error={error}>
      <section>
        <Table data={tableData!} />
      </section>
      <Pagination pagesCount={pagesCount!} initPage={currentPage!} onPageChange={() => {}} />
    </PageLayout>
  );
};
