import 'styled-components';
import '@styled-system/css';

import { Theme } from '@theme/types';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

declare module '@styled-system/css' {
  type StyledFunction = (theme: Theme) => ResponsiveStyleValue<SystemCssProperties>;
  export function css(input: StyledFunction): CssFunctionReturnType;
}
