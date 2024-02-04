import css from '@styled-system/css';
import styled from 'styled-components';

import { TriangleIcon } from '@icons/TriangleIcon';

import { NodeWrapperProps } from './types';

export const NodeWrapper = styled('div')<NodeWrapperProps & { isLeaf: boolean }>(
  ({ theme: { space }, lvl, isLeaf }) =>
    css({
      ml: `${space[4] * lvl + (isLeaf ? 28 : 0)}px`,
      display: 'flex',
      alignItems: 'center',
    }),
);

export const ExpandButton = styled('button')(
  css({
    p: 1,
    m: 0,
    mr: 2,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  }),
);

export const ExpandIcon = styled(TriangleIcon)({
  display: 'block',
});
