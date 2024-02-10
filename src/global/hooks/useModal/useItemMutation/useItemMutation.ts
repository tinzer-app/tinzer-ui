import { useState } from 'react';

import { useSnackbar } from '@components/Snackbar';

import { useItemQuery } from './data';
import { UseItemMutationParams } from './types';

export const useItemMutation = <QueryParamsType>({
  onSuccessMutation,
  getSnackbarTitle,
  mutationFn,
}: UseItemMutationParams<QueryParamsType>) => {
  const { onOpen: onSnackbarOpen, ...snackbarData } = useSnackbar();

  const [snackbarTitle, setSnackbarTitle] = useState('');

  const onErrorFetch = (params: QueryParamsType) => {
    setSnackbarTitle(getSnackbarTitle({ params, success: false }));
    onSnackbarOpen();
  };

  const onSuccessFetch = (params: QueryParamsType) => {
    setSnackbarTitle(getSnackbarTitle({ params, success: true }));
    onSnackbarOpen();
    onSuccessMutation();
  };

  const createItemMutation = useItemQuery<QueryParamsType>({
    onErrorFetch,
    onSuccessFetch,
    mutationFn,
  });

  return {
    createItemMutation,
    snackbar: {
      ...snackbarData,
      title: snackbarTitle,
    },
  };
};
