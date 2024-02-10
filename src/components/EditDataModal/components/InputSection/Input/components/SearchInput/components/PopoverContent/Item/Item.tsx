import React, { FC, useMemo } from 'react';

import { InputType, useEditDataModalContext } from '@components/EditDataModal';

import { getSearchItems } from '../../../useSearchInput';
import { ItemProps } from './types';
import { CheckIcon, CheckIconWrapper, Title, Wrapper } from './styled';

export const Item: FC<ItemProps> = ({ data, inputId }) => {
  const { id, title } = data;

  const { setFormData, formData = {} } = useEditDataModalContext() || {};

  const searchItems = getSearchItems(formData, inputId);

  const isChecked = useMemo(() => !!searchItems.find(item => item.id === id), [searchItems, id]);

  const onItemClick = () =>
    setFormData?.(prev => ({
      ...prev,
      [inputId]: {
        type: InputType.search,
        data: {
          items: isChecked
            ? getSearchItems(prev, inputId).filter(item => item.id !== id)
            : [...getSearchItems(prev, inputId), data],
        },
      },
    }));

  return (
    <Wrapper onClick={onItemClick}>
      <Title value={title} variant="body2Regular" />
      <CheckIconWrapper>{isChecked && <CheckIcon size={16} />}</CheckIconWrapper>
    </Wrapper>
  );
};
