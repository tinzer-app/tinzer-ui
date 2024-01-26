import React, { FC } from 'react';

import { AppTitleIconProps } from './types';

export const AppTitleIcon: FC<AppTitleIconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="85" height="25" className={className}>
    <text
      x={0}
      y={23}
      fill="#06F"
      fontFamily="'Oswald', sans-serif"
      fontSize="23"
      fontWeight="bold">
      TINZER
    </text>
  </svg>
);
