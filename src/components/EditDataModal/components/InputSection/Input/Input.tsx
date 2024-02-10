import React, { FC } from 'react';

import { InputProps, InputType } from './types';
import { ConditionInput, SearchInput, TextInput } from './components';

export const Input: FC<InputProps> = ({ data }) => {
  switch (data.type) {
    case InputType.text: {
      return <TextInput {...data} />;
    }

    case InputType.condition: {
      return <ConditionInput {...data} />;
    }

    case InputType.search: {
      return <SearchInput {...data} />;
    }

    default: {
      return null;
    }
  }
};
