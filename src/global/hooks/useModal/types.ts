import { ModalFormData } from '@components/EditDataModal';

import { UseItemMutationParams } from './useItemMutation';

export interface UseModalParams<QueryParamsType> extends UseItemMutationParams<QueryParamsType> {
  getRequestData: (formData: ModalFormData) => QueryParamsType | null;
}
