import React, { FC } from 'react';

import { TagProps } from './types';
import { TagComponent } from './styled';

export const Tag: FC<TagProps> = ({ data, className }) => {
  const { title, color } = data;

  return (
    <TagComponent
      color={color}
      className={className}
      variant="body2Regular"
      textColor="textPrimary">
      {title}
    </TagComponent>
  );
};
