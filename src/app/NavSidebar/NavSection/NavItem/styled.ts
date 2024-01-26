import css from '@styled-system/css';
import styled from 'styled-components';
import { Link as LinkComponent } from 'react-router-dom';

import { LinkIcon } from './LinkIcon';

export const Icon = styled(LinkIcon)(
  css({
    mr: 3,
  }),
);

export const Link = styled(LinkComponent)(({ theme: { variants } }) =>
  css({
    ...variants.body1Semibold,
    color: 'textPrimary',
    textDecoration: 'none',
    py: 3,
    display: 'flex',
    alignItems: 'center',
  }),
);
