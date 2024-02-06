import { useState } from 'react';

import { OnFormSubmitParams } from '@components/EditDataModal';

import { useLocationId } from '../useLocationId';
import { UseModalParams } from './types';
import { getModalData, getRequestData, useSaveItemMutation } from './utils';

export const useModal = ({ refetchPaginationTableData }: UseModalParams) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  const locationId = useLocationId();
  const { createItemMutation, snackbar } = useSaveItemMutation({ refetchPaginationTableData });

  const onFormSubmit = ({ formData }: OnFormSubmitParams) => {
    const requestData = getRequestData({ locationId, formData });

    if (requestData) {
      createItemMutation.mutate({ data: requestData });
      onClose();
    }
  };

  const data = getModalData({ locationId });

  return {
    modal: {
      isOpen,
      onFormSubmit,
      onClose,
      onOpen,
      data,
    },
    snackbar,
  };
};
