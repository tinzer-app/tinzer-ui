import React, { FC } from 'react';

import { TextInputProps } from './types';
import { useTextInput } from './useTextInput';
import { InputComponent, TextArea } from './styled';

export const TextInput: FC<TextInputProps> = ({ data, id }) => {
  const { isRequired, inputType = 'text' } = data;

  const inputMode = inputType === 'url' ? 'url' : 'text';

  const { value, onChange, isValid, onBlur } = useTextInput({ data, id });

  return inputType === 'textArea' ? (
    <TextArea id={id} value={value} onChange={onChange} cols={50} rows={5} />
  ) : (
    <InputComponent
      id={id}
      isValid={isValid}
      inputMode={inputMode}
      type={inputType}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      required={isRequired}
    />
  );
};
