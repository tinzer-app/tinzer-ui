import React, { FC } from 'react';

import { SettingsIcon } from '@icons/SettingsIcon';
import { ButtonControlIconType } from '@global/types';

import { IconProps } from './types';

export const Icon: FC<IconProps> = ({ data }) => {
  switch (data.type) {
    case ButtonControlIconType.settings: {
      const { size } = data.data;

      return <SettingsIcon size={size} />;
    }

    default: {
      return null;
    }
  }
};
