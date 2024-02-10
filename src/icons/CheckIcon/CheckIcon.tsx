import React, { FC } from 'react';

import { EqualSizeIconProps } from '@icons/types';

export const CheckIcon: FC<EqualSizeIconProps> = ({ className, size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24">
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 12.611L8.923 17.5 20 6.5"></path>
  </svg>
);
