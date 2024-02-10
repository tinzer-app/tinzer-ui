import { useEffect, useRef, useState } from 'react';

import { InputType, useEditDataModalContext } from '@components/EditDataModal';

import { getSearchItems } from './getSearchItems';

export const useSearchInput = (id: string) => {
  const [isInputBlured, setIsInputBlured] = useState(false);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const searchInputRef = useRef<HTMLDivElement>(null);

  const {
    setFormData,
    setInvalidInputIds,
    couldShowInvalidInputError,
    formData = {},
  } = useEditDataModalContext() || {};

  const searchItems = getSearchItems(formData, id);

  const onItemDelete = (itemId: string) =>
    setFormData?.(prev => ({
      ...prev,
      [id]: {
        type: InputType.search,
        data: {
          items: getSearchItems(prev, id).filter(item => item.id !== itemId),
        },
      },
    }));

  const onAddButtonClick = () => setIsPopoverOpen(prev => !prev);
  const onInputBlur = () => setIsInputBlured(true);

  const isInputValid = !!searchItems?.length;

  useEffect(
    () =>
      setInvalidInputIds?.(prev => {
        const newInvalidInputIds = new Set(prev);

        if (isInputValid) {
          newInvalidInputIds.delete(id);
        } else {
          newInvalidInputIds.add(id);
        }

        return newInvalidInputIds;
      }),
    [isInputValid, id, setInvalidInputIds],
  );

  const isValid = couldShowInvalidInputError || isInputBlured ? isInputValid : true;

  return {
    isValid,
    isPopoverOpen,
    setIsPopoverOpen,
    searchInputRef,
    onItemDelete,
    onAddButtonClick,
    onInputBlur,
    searchItems,
  };
};
