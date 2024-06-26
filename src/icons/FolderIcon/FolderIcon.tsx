import React, { FC } from 'react';

import { EqualSizeIconProps } from '../types';

export const FolderIcon: FC<EqualSizeIconProps> = ({ className, size = 30 }) => (
  <svg
    height={size}
    width={size}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1024 1024">
    <g>
      <path
        fill="#FFEA00"
        d="M242.3 743.4h603.4c27.8 0 50.3-22.5 50.3-50.3V192H192v501.1c0 27.8 22.5 50.3 50.3 50.3z"></path>
      <path
        fill="#FFFF8D"
        d="M178.3 807.4h603.4c27.8 0 50.3-22.5 50.3-50.3V256H128v501.1c0 27.8 22.5 50.3 50.3 50.3z"></path>
      <path
        fill="#3D5AFE"
        d="M960 515v384c0 35.3-28.7 64-64 64H128c-35.3 0-64-28.7-64-64V383.8c0-35.3 28.7-64 64-64h344.1c24.5 0 46.8 13.9 57.5 35.9l46.5 95.3H896c35.3 0 64 28.7 64 64z"></path>
      <path
        fill="#536DFE"
        d="M704 512c0-20.7-1.4-41.1-4.1-61H576.1l-46.5-95.3c-10.7-22-33.1-35.9-57.5-35.9H128c-35.3 0-64 28.7-64 64V899c0 6.7 1 13.2 3 19.3C124.4 945 188.5 960 256 960c247.4 0 448-200.6 448-448z"></path>
    </g>
  </svg>
);
