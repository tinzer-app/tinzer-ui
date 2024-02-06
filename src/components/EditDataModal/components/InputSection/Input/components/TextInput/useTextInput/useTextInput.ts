import { ChangeEvent, useEffect, useMemo, useState } from 'react';

import { InputType, useEditDataModalContext } from '@components/EditDataModal';

import { TextInputProps } from '../types';
import { getTextFieldFormData, getIsInputValid } from './utils';

export const useTextInput = ({ data, id }: TextInputProps) => {
  const { setFormData, formData, setInvalidInputIds, couldShowInvalidInputError } =
    useEditDataModalContext() || {};
  const initValue = useMemo(() => getTextFieldFormData({ id, formData }), [id, formData]);
  const [value, setValue] = useState(initValue);
  const [isInputBlured, setIsInputBlured] = useState(false);

  const onBlur = () => setIsInputBlured(true);
  const onChange = ({ target: { value } }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setValue(value);

  const isInputValid = getIsInputValid({ data, value });

  useEffect(() => setValue(initValue), [initValue, setValue]);

  // TODO: обернуть в debounce
  useEffect(
    () =>
      setFormData?.(prev => ({
        ...prev,
        [id]: {
          type: InputType.text,
          data: { value },
        },
      })),
    [setFormData, id, value],
  );

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

  return { value, onChange, onBlur, isValid };
};
