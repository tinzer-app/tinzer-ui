import React, { FC } from 'react';

import { EqualSizeIconProps } from '../types';

export const ChecklistIcon: FC<EqualSizeIconProps> = ({ className, size = 30 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    className={className}
    viewBox="0 0 1024 1024">
    <g>
      <path
        fill="#3F51B5"
        d="M379.733 386.133L221.867 541.867l-89.6-87.467-46.934 46.933 136.534 136.534 204.8-204.8zm0-277.333L221.867 264.533l-89.6-87.466L85.333 224l136.534 136.533 204.8-204.8zm0 554.667L221.867 819.2l-89.6-87.467-46.934 46.934L221.867 915.2l204.8-204.8z"></path>
      <path
        fill="#90CAF9"
        d="M512 469.333h426.667v85.334H512zM512 192h426.667v85.333H512zm0 554.667h426.667V832H512z"></path>
    </g>
  </svg>
);
