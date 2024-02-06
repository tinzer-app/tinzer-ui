import { InputType } from '@components/EditDataModal';

import { GetTextFieldFormDataParams } from './types';

export const getTextFieldFormData = ({ formData, id }: GetTextFieldFormDataParams) =>
  formData?.[id]?.type === InputType.text ? formData[id].data.value : '';
