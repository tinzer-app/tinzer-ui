import React, { FC } from 'react';

import { EqualSizeIconProps } from '@icons/types';

export const SearchIcon: FC<EqualSizeIconProps> = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24">
    <path
      stroke="#9c9c9c"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11 6a5 5 0 015 5m.659 5.655L21 21m-2-10a8 8 0 11-16 0 8 8 0 0116 0z"></path>
  </svg>
);
