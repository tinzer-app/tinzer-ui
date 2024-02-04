import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { PageLayout } from '@components/PageLayout';
import { Table, OnTableRowClick } from '@components/Table';

import { Pagination } from './styled';
import { usePaginationTableSceneData } from './data';

export const PaginationTableScene: FC = () => {
  const navigate = useNavigate();
  const { error, isFetching, data, setRequestParams } = usePaginationTableSceneData();

  const onPageChange = (currentPaginationPage: number) =>
    setRequestParams({ currentPaginationPage });

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
      <Pagination pagesCount={pagesCount!} initPage={currentPage!} onPageChange={onPageChange} />
    </PageLayout>
  );
};
