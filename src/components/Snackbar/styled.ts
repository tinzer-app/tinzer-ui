import css from '@styled-system/css';
import styled from 'styled-components';

import { CloseIcon } from '@icons/CloseIcon';

export const Icon = styled(CloseIcon)({
  display: 'block',
});

export const Content = styled('div')(
  css({
    display: 'flex',
    alignItems: 'center',
    py: 3,
    px: 5,
    borderRadius: 8,
    backgroundColor: 'backgroundPrimaryInverse',
  }),
);

export const CloseButton = styled('button')(
  css({
    p: 1,
    ml: 4,
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
  }),
);
