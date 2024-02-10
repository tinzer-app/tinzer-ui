import React, { FC } from 'react';

import { SearchProps } from './types';
import { useSearch } from './useSearch';
import { ClearButton, CloseIcon, IconWrapper, Input, SearchIcon, SearchWrapper } from './styled';

export const Search: FC<SearchProps> = ({ config, onChange, className }) => {
  const { placeholder } = config || {};

  const {
    value,
    onClearBlur,
    onClearClick,
    onClearFocus,
    onInputChange,
    onSearchBlur,
    onSearchClick,
    onSearchFocus,
    inputRef,
  } = useSearch({ onChange, config });

  return (
    <SearchWrapper
      className={className}
      onFocus={onSearchFocus}
      onBlur={onSearchBlur}
      onClick={onSearchClick}
      tabIndex={0}>
      <IconWrapper>
        <SearchIcon size={16} />
      </IconWrapper>
      <Input
        ref={inputRef}
        tabIndex={-1}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        aria-label="поиск"
      />
      {!!value && (
        <ClearButton
          onClick={onClearClick}
          onFocus={onClearFocus}
          onBlur={onClearBlur}
          aria-label="очистить поиск">
          <CloseIcon size={16} />
        </ClearButton>
      )}
    </SearchWrapper>
  );
};
