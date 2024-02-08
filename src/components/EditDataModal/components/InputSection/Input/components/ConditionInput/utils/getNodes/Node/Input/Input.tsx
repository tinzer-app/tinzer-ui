import React, { ChangeEvent, FC, useEffect } from 'react';

import { useEditDataModalContext } from '@components/EditDataModal';

import { getIsInputValid } from '../../../../../TextInput';
import { InputProps } from './types';
import { InputComponent } from './styled';

const GET_IS_INPUT_VALID_DATA = {
  inputType: 'text',
  isRequired: true,
};

export const Input: FC<InputProps> = ({ data }) => {
  const { onValueChange, value, id, placeholder } = data;

  const { setInvalidInputIds } = useEditDataModalContext() || {};

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => onValueChange(target.value);

  const isInputValid = getIsInputValid({ data: GET_IS_INPUT_VALID_DATA, value });

  useEffect(() => {
    setInvalidInputIds?.(prev => {
      const newInvalidInputIds = new Set(prev);

      if (isInputValid) {
        newInvalidInputIds.delete(id);
      } else {
        newInvalidInputIds.add(id);
      }

      return newInvalidInputIds;
    });

    return () =>
      setInvalidInputIds?.(prev => {
        const newInvalidInputIds = new Set(prev);

        newInvalidInputIds.delete(id);

        return newInvalidInputIds;
      });
  }, [isInputValid, id, setInvalidInputIds]);

  return (
    <InputComponent
      placeholder={placeholder}
      isValid={isInputValid}
      value={value}
      onChange={onChange}
      required
    />
  );
};
