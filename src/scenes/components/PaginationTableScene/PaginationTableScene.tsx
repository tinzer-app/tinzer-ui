import React, { FC } from 'react';

import { Snackbar } from '@components/Snackbar';
import { PageLayout } from '@components/PageLayout';
import { EditDataModal } from '@components/EditDataModal';

import { usePaginationTableSceneData } from './data';
import { usePaginationModal, usePaginationTable } from './utils';
import { CreateItemButton, CreateItemIcon, Pagination, Table } from './styled';

export const PaginationTableScene: FC = () => {
  const { error, isFetching, data, setRequestParams, refetchPaginationTableData } =
    usePaginationTableSceneData();

  const { modal, snackbar } = usePaginationModal({ refetchPaginationTableData });
  const { onRowClick, onPageChange } = usePaginationTable({ setRequestParams });

  const { isOpen, onOpen } = modal;

  const { tableData, title, paginationData } = data || {};
  const { pagesCount, currentPage } = paginationData || {};
  const isDataEmpty = !(tableData?.rows?.length && title && paginationData);

  return (
    <>
      <Snackbar {...snackbar} />
      <CreateItemButton onClick={onOpen}>
        <CreateItemIcon />
      </CreateItemButton>
      {isOpen && <EditDataModal {...modal} />}
      <PageLayout title={title!} isLoading={isFetching} isDataEmpty={isDataEmpty} error={error}>
        <section>
          <Table data={tableData!} onRowClick={onRowClick} />
        </section>
        <Pagination pagesCount={pagesCount!} initPage={currentPage!} onPageChange={onPageChange} />
      </PageLayout>
    </>
  );
};
