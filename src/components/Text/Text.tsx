import React, { FC } from 'react';

import { TextProps } from './types';

export const Text: FC<TextProps> = ({ children, className }) => (
  <div className={className}>{children}</div>
);
