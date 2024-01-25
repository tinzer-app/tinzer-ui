import styled from 'styled-components';

import { TextProps } from './types';

export const TextComponent = styled('div')<TextProps>(
  ({ theme: { variants, colors }, variant, textColor }) => ({
    ...variants[variant || 'body1Regular'],
    color: colors[textColor || 'textPrimary'],
  }),
);
