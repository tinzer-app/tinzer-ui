import { InputType, ModalFormData } from '@components/EditDataModal';

export const getSearchItems = (formData: ModalFormData, id: string) => {
  const searchData = formData?.[id];

  return searchData?.type === InputType.search ? searchData.data.items : [];
};
