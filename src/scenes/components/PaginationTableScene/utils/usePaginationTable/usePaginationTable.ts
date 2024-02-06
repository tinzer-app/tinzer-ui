import { useNavigate } from 'react-router-dom';

import { OnTableRowClick } from '@components/Table';

import { UsePaginationTableParams } from './types';

export const usePaginationTable = ({ setRequestParams }: UsePaginationTableParams) => {
  const navigate = useNavigate();

  const onPageChange = (currentPaginationPage: number) =>
    setRequestParams({ currentPaginationPage });

  const onRowClick: OnTableRowClick = ({ link }) => {
    if (link) {
      navigate(link.to);
    }
  };

  return { onPageChange, onRowClick };
};
