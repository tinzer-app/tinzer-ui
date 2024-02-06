import React, { FC } from 'react';

import { EqualSizeIconProps } from '@icons/types';

export const PlusIcon: FC<EqualSizeIconProps> = ({ size = 40, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    className={className}
    viewBox="0 0 24 24">
    <g>
      <g>
        <g fillRule="evenodd" clipRule="evenodd">
          <path
            fill="#06F"
            d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12z"></path>
          <path
            fill="#fff"
            d="M12 7.007a.75.75 0 01.75.75v8.486a.75.75 0 01-1.5 0V7.757a.75.75 0 01.75-.75z"></path>
          <path
            fill="#fff"
            d="M17 12a.75.75 0 01-.75.75H7.765a.75.75 0 010-1.5h8.485A.75.75 0 0117 12z"></path>
        </g>
      </g>
    </g>
  </svg>
);
