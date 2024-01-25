import React, { FC } from 'react';

import { TextProps } from './types';
import { TextComponent } from './styled';

export const Text: FC<TextProps> = ({ children, ...otherProps }) => (
  <TextComponent {...otherProps}>{children}</TextComponent>
);
