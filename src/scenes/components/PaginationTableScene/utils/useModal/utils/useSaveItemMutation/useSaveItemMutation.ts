import { useState } from 'react';

import { useSnackbar } from '@components/Snackbar';

import { UseSaveItemMutationParams } from './types';
import { getSnackbarTitle } from './getSnackbarTitle';
import { QueryParams, useCreateItemQuery } from './data';

export const useSaveItemMutation = ({ refetchPaginationTableData }: UseSaveItemMutationParams) => {
  const { onOpen: onSnackbarOpen, ...snackbarData } = useSnackbar();

  const [snackbarTitle, setSnackbarTitle] = useState('');

  const onErrorFetch = ({ data }: QueryParams) => {
    setSnackbarTitle(getSnackbarTitle({ data, success: false }));
    onSnackbarOpen();
  };

  const onSuccessFetch = ({ data }: QueryParams) => {
    setSnackbarTitle(getSnackbarTitle({ data, success: true }));
    onSnackbarOpen();
    refetchPaginationTableData();
  };

  const createItemMutation = useCreateItemQuery({ onErrorFetch, onSuccessFetch });

  return {
    createItemMutation,
    snackbar: {
      ...snackbarData,
      title: snackbarTitle,
    },
  };
};
