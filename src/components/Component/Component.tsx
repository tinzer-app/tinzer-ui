import React, { FC } from 'react';

import { ComponentProps } from './types';
import { ComponentWrapper } from './styled';
import { ComponentContent } from './ComponentContent';

export const Component: FC<ComponentProps> = ({ data }) => {
  const { styles } = data;

  return (
    <ComponentWrapper data={data} styles={styles}>
      <ComponentContent data={data} />
    </ComponentWrapper>
  );
};
