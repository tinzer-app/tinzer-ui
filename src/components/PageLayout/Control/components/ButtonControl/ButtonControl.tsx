import React, { FC } from 'react';

import { ButtonControlProps } from './types';
import { Button } from './styled';
import { Icon } from './Icon';

export const ButtonControl: FC<ButtonControlProps> = ({ data }) => {
  const { icon, onClick } = data;

  return (
    <Button onClick={onClick}>
      <Icon data={icon} />
    </Button>
  );
};
