import React, { FC } from 'react';

import { Input } from './Input';
import { Label } from './styled';
import { InputSectionProps } from './types';

export const InputSection: FC<InputSectionProps> = ({ data, className }) => {
  const { label, input } = data;
  const { id } = input;

  return (
    <div className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input data={input} />
    </div>
  );
};
