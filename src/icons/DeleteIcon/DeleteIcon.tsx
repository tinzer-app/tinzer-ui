import React, { FC } from 'react';

import { ColorfulIconProps } from '@icons/types';
import { useTheme } from 'styled-components';

export const DeleteIcon: FC<ColorfulIconProps> = ({
  className,
  color = 'brightRed',
  size = 16,
}) => {
  const { colors } = useTheme();
  const resultColor = colors[color];

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      viewBox="0 0 24 24">
      <g stroke={resultColor} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M10 11v6M14 11v6M4 7h16M6 7h12v11a3 3 0 01-3 3H9a3 3 0 01-3-3V7zM9 5a2 2 0 012-2h2a2 2 0 012 2v2H9V5z"></path>
      </g>
    </svg>
  );
};
