import { InputType, ModalFormData } from '@components/EditDataModal';

export const getConditions = (formData: ModalFormData, id: string) => {
  const itemData = formData[id];

  return itemData?.type === InputType.condition ? itemData.data.conditions : [];
};
