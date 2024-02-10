import { useState } from 'react';

import { OnFormSubmitParams } from '@components/EditDataModal';

import { UseModalParams } from './types';
import { useItemMutation } from './useItemMutation';

export const useModal = <QueryParamsType>({
  onSuccessMutation,
  getRequestData,
  getSnackbarTitle,
  mutationFn,
}: UseModalParams<QueryParamsType>) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const { createItemMutation, snackbar } = useItemMutation<QueryParamsType>({
    onSuccessMutation,
    getSnackbarTitle,
    mutationFn,
  });

  const onFormSubmit = ({ formData }: OnFormSubmitParams) => {
    const requestData = getRequestData(formData);

    if (requestData) {
      createItemMutation.mutate(requestData);
      onClose();
    }
  };

  return {
    modal: {
      isOpen,
      onFormSubmit,
      onClose,
      onOpen,
    },
    snackbar,
  };
};
