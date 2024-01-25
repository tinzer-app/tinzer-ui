import { AnchorHTMLAttributes } from 'react';

import { ThemeVariant } from '@theme/variants';

export interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'color'> {
  /**
   * @default 'body1Regular'
   */
  variant?: ThemeVariant | null;
  isWithStopPropagation?: boolean | null;
}
