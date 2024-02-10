import { useModal } from '@global/hooks';

import { ModalFormData } from '@components/EditDataModal';

import { useLocationId } from '../useLocationId';
import {
  getModalData,
  getRequestData as getRequestDataCore,
  getSnackbarTitle,
  mutationFn,
} from './utils';
import { UsePaginationModalParams } from './types';

export const usePaginationModal = ({ refetchPaginationTableData }: UsePaginationModalParams) => {
  const locationId = useLocationId();

  const getRequestData = (formData: ModalFormData) => {
    const data = getRequestDataCore({ locationId, formData });

    return data ? { data } : null;
  };

  const { modal, ...otherData } = useModal({
    mutationFn,
    getRequestData,
    getSnackbarTitle,
    onSuccessMutation: refetchPaginationTableData,
  });

  const modalData = getModalData({ locationId });

  return {
    ...otherData,
    modal: {
      ...modal,
      data: modalData,
    },
  };
};
