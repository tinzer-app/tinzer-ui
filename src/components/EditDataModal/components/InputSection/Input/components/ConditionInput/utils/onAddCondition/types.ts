import { Dispatch, SetStateAction } from 'react';

import { ModalFormData } from '@components/EditDataModal';

export interface OnAddConditionParams {
  id: string;
  setFormData?: Dispatch<SetStateAction<ModalFormData>>;
}
