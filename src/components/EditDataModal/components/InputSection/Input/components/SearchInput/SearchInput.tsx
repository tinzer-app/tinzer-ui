import React, { FC } from 'react';

import { Popover } from '@components/Popover';

import { SearchInputProps } from './types';
import { useSearchInput } from './useSearchInput';
import { PopoverContent, SearchItem } from './components';
import { AddItemButton, AddItemIcon, SearchItemsWrapper } from './styled';

export const SearchInput: FC<SearchInputProps> = ({ id, data }) => {
  const { queryConfig } = data;

  const {
    onAddButtonClick,
    searchInputRef,
    searchItems,
    onItemDelete,
    isPopoverOpen,
    setIsPopoverOpen,
    onInputBlur,
    isValid,
  } = useSearchInput(id);

  const Trigger = (
    <AddItemButton type="button" onClick={onAddButtonClick}>
      <AddItemIcon size={16} />
    </AddItemButton>
  );

  return (
    <SearchItemsWrapper ref={searchInputRef} onBlur={onInputBlur} isValid={isValid}>
      {searchItems.map(itemData => (
        <SearchItem key={itemData.id} data={itemData} onItemDelete={onItemDelete} />
      ))}
      <Popover
        Trigger={Trigger}
        positionTriggerRef={searchInputRef}
        onIsOpenChange={setIsPopoverOpen}
        isOpen={isPopoverOpen}
        placement="top-end">
        <PopoverContent config={queryConfig} inputId={id} />
      </Popover>
    </SearchItemsWrapper>
  );
};
