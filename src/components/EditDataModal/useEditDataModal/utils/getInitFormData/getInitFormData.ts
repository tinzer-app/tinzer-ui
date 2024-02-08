import { ModalFormData } from '@components/EditDataModal';
import { InputSectionData } from '@components/EditDataModal/components';

import { getFormItemData } from './getFormItemData';

export const getInitFormData = (inputSections: InputSectionData[]) =>
  inputSections.reduce<ModalFormData>(
    (formData, { input }) => ({
      ...formData,
      [input.id]: getFormItemData(input),
    }),
    {},
  );
