import React, { FC } from 'react';

import { TextProps } from './types';
import { TextComponent } from './styled';

export const Text: FC<TextProps> = ({ value, ...otherProps }) => (
  <TextComponent {...otherProps}>{value}</TextComponent>
);
