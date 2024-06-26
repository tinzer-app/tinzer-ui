import React, { FC } from 'react';

import { RunIcon } from '@icons/RunIcon';
import { DeleteIcon } from '@icons/DeleteIcon';
import { SettingsIcon } from '@icons/SettingsIcon';
import { ButtonControlIconType } from '@global/types';

import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ data }) => {
  const { size } = data.data;

  switch (data.type) {
    case ButtonControlIconType.settings: {
      return <SettingsIcon size={size} />;
    }

    case ButtonControlIconType.run: {
      return <RunIcon size={size} />;
    }

    case ButtonControlIconType.delete: {
      return <DeleteIcon size={size} />;
    }

    default: {
      return null;
    }
  }
};
