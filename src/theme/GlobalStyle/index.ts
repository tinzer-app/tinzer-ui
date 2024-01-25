import { createGlobalStyle } from 'styled-components';

import { ROOT_FONT_SIZE } from '@theme/variants';

export const GlobalStyle = createGlobalStyle(({ theme: { colors } }) => ({
  html: {
    fontSize: ROOT_FONT_SIZE,
    margin: 0,
    padding: 0,
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: colors.backgroundPrimary,
  },
}));
