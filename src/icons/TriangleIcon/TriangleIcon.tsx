import React, { FC } from 'react';

import { TriangleIconProps } from './types';

const DIRECTIONS = ['top', 'right', 'bottom', 'left'];

export const TriangleIcon: FC<TriangleIconProps> = ({
  className,
  size = 12,
  direction = 'right',
}) => {
  const directionIdx = DIRECTIONS.findIndex(item => item === direction);
  const rotateRation = directionIdx === -1 ? 0 : directionIdx;
  const transform = `rotate(${rotateRation * 90})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      transform={transform}
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill="#aeaeae"
        fillRule="evenodd"
        d="M13.789 1.578l9.764 19.528A2 2 0 0121.763 24H2.237a2 2 0 01-1.789-2.894l9.764-19.528a2 2 0 013.578 0z"
        clipRule="evenodd"></path>
    </svg>
  );
};
