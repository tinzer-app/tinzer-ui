import React, { FC } from 'react';

import { ControlType } from '@global/types';

import { ControlProps } from './types';
import { ButtonControl } from './components';

export const Control: FC<ControlProps> = ({ data }) => {
  switch (data.type) {
    case ControlType.button: {
      return <ButtonControl data={data.data} />;
    }

    default: {
      return null;
    }
  }
};
