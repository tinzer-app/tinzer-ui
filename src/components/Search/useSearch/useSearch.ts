import debounce from 'lodash.debounce';
import { ChangeEvent, useEffect, useMemo, useRef, useState } from 'react';

import { OnChange, UseSearchParams } from './types';

export const useSearch = ({ onChange, config }: UseSearchParams) => {
  const { delayMs = 0 } = config || {};

  const [value, setValue] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isCloseButtonFocused, setIsCloseButtonFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const debouncedOnChange = useMemo(() => debounce(onChange, delayMs), [onChange, delayMs]);
  const onValueChange: OnChange = newValue => {
    setValue(newValue);
    debouncedOnChange(newValue);
  };

  const onClearClick = () => onValueChange('');
  const onInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
    onValueChange(value);

  const onSearchFocus = () => setIsSearchFocused(true);
  const onSearchBlur = () => setIsSearchFocused(false);
  const onClearFocus = () => setIsCloseButtonFocused(true);
  const onClearBlur = () => setIsCloseButtonFocused(false);

  useEffect(() => {
    const { current } = inputRef;

    if (isSearchFocused && !isCloseButtonFocused) {
      current?.focus();
    } else {
      current?.blur();
    }
  }, [isCloseButtonFocused, isSearchFocused, inputRef]);

  useEffect(() => {
    // сбрасываем фокус с CloseButton при его размонтировании
    if (!value) {
      setIsCloseButtonFocused(false);
    }
  }, [value, setIsCloseButtonFocused]);

  return {
    value,
    inputRef,
    onClearClick,
    onInputChange,
    onSearchFocus,
    onSearchBlur,
    onClearFocus,
    onClearBlur,
    onSearchClick: onSearchFocus,
  };
};
