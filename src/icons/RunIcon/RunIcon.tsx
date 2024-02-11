import React, { FC } from 'react';

import { ColorfulIconProps } from '@icons/types';
import { useTheme } from 'styled-components';

export const RunIcon: FC<ColorfulIconProps> = ({ color = 'oceanBlue', size = 16, className }) => {
  const { colors } = useTheme();
  const resultColor = colors[color];

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      fill={resultColor}
      stroke={resultColor}
      viewBox="0 0 16 16">
      <g>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill={resultColor}>
            <path d="M6 11l5-3-5-3v6zm2 3.6c-3.6 0-6.6-3-6.6-6.6 0-3.6 3-6.6 6.6-6.6 3.6 0 6.6 3 6.6 6.6 0 3.6-3 6.6-6.6 6.6zM8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
