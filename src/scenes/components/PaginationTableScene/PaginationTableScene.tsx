import React, { FC } from 'react';

import { Table } from '@components/Table';
import { PageLayout } from '@components/PageLayout';

import { Pagination } from './styled';
import { usePaginationTableSceneData } from './data';
import { OnTableRowClick } from '@components/Table/components';
import { useNavigate } from 'react-router-dom';

export const PaginationTableScene: FC = () => {
  const navigate = useNavigate();
  const { error, isFetching, data } = usePaginationTableSceneData();

  const onRowClick: OnTableRowClick = ({ link }) => {
    if (link) {
      navigate(link.to);
    }
  };

  const { tableData, title, paginationData } = data || {};
  const isDataEmpty = !(tableData?.rows?.length && title && paginationData);

  const { pagesCount, currentPage } = paginationData || {};

  return (
    <PageLayout title={title!} isLoading={isFetching} isDataEmpty={isDataEmpty} error={error}>
      <section>
        <Table data={tableData!} onRowClick={onRowClick} />
      </section>
      <Pagination pagesCount={pagesCount!} initPage={currentPage!} onPageChange={() => {}} />
    </PageLayout>
  );
};
