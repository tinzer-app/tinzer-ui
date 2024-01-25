import css from '@styled-system/css';
import styled from 'styled-components';

import { LinkProps } from './types';

export const A = styled('a')<LinkProps>(({ theme: { variants }, variant }) =>
  css({
    ...variants[variant || 'body1Regular'],

    color: 'textLink',
    textDecoration: 'none',
  }),
);
