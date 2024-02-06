import React, { FC } from 'react';
import { useTheme } from 'styled-components';

import { CloseIconProps } from './types';

export const CloseIcon: FC<CloseIconProps> = ({
  className,
  color = 'textSecondary',
  size = 16,
}) => {
  const { colors } = useTheme();

  const resultColor = colors[color];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke={resultColor}
      viewBox="-0.5 0 25 25">
      <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M3 21.32l18-18M3 3.32l18 18"></path>
      </g>
    </svg>
  );
};
