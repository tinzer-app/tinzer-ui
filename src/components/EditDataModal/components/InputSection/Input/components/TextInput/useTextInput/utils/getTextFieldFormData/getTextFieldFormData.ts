import { InputType } from '@components/EditDataModal';

import { GetTextFieldFormDataParams } from './types';

export const getTextFieldFormData = ({ formData, id }: GetTextFieldFormDataParams) => {
  const formItem = formData?.[id];

  return formItem?.type === InputType.text ? formItem.data.value : '';
};
