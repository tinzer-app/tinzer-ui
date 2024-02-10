import { useModal as useModalCore } from '@global/hooks';
import { ModalFormData } from '@components/EditDataModal';
import { useLocationId } from '@scenes/components/PaginationTableScene';

import { UseModalParams } from './types';
import {
  getModalData,
  getRequestData as getRequestDataCore,
  getSnackbarTitle,
  mutationFn,
} from './utils';

export const useModal = ({ responseData, refetch }: UseModalParams) => {
  const locationId = useLocationId();

  const getRequestData = (formData: ModalFormData) => {
    const { id = '' } = responseData?.data || {};
    const data = getRequestDataCore({ locationId, formData, id });

    return data ? { data } : null;
  };

  const { modal, ...otherData } = useModalCore({
    mutationFn,
    getRequestData,
    getSnackbarTitle,
    onSuccessMutation: refetch,
  });

  const modalData = getModalData({ locationId, responseData });

  return {
    ...otherData,
    modal: {
      ...modal,
      data: modalData,
    },
  };
};
