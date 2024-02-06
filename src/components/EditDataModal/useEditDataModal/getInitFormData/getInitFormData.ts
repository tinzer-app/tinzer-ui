import { ModalFormData } from '../../types';
import { InputSectionData } from '../../components';

export const getInitFormData = (inputSections: InputSectionData[]) =>
  inputSections.reduce<ModalFormData>(
    (formData, { input }) => ({
      ...formData,
      [input.id]: {
        type: input.type,
        data: {
          value: input.data.initValue || '',
        },
      },
    }),
    {},
  );
