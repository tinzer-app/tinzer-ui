import { ElementType } from 'react';

import { ThemeColor } from '@theme/colors';
import { ThemeVariant } from '@theme/variants';

export interface TextData {
  value: string;
  /**
   * @default 'textPrimary'
   */
  textColor?: ThemeColor | null;
  /**
   * @default 'body1Regular'
   */
  variant?: ThemeVariant | null;
}

export interface TextProps extends TextData {
  as?: ElementType;
  className?: string;
}
