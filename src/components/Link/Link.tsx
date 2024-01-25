import React, { FC } from 'react';

import { A } from './styled';
import { LinkProps } from './types';

export const Link: FC<LinkProps> = ({ isWithStopPropagation, ...otherProps }) => {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isWithStopPropagation) {
      e.stopPropagation();
    }
  };

  return <A {...otherProps} onClick={onClick} />;
};
