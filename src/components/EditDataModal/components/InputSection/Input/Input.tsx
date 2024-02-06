import React, { FC } from 'react';

import { TextInput } from './components';
import { InputProps, InputType } from './types';

export const Input: FC<InputProps> = ({ data }) => {
  switch (data.type) {
    case InputType.text: {
      return <TextInput {...data} />;
    }

    default: {
      return null;
    }
  }
};
