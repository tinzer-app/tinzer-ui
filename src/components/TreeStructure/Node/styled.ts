import css from '@styled-system/css';
import styled from 'styled-components';

import { TriangleIcon } from '@icons/TriangleIcon';

import { ExpandButtonProps, NodeWrapperProps } from './types';

export const LEAF_OFFSET = 28;

export const NodeWrapper = styled('div')<NodeWrapperProps & { isLeaf: boolean }>(
  ({ theme: { space }, lvl, isLeaf }) =>
    css({
      ml: `${space[4] * lvl + (isLeaf ? LEAF_OFFSET : 0)}px`,
      display: 'flex',
      alignItems: 'center',
    }),
);

export const ExpandButton = styled('button')<ExpandButtonProps>(({ expandButtonStyles }) =>
  css({
    p: 1,
    m: 0,
    mr: 2,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    borderRadius: 6,

    ':hover': {
      backgroundColor: 'backgroundTertiary',
    },

    ...expandButtonStyles,
  }),
);

export const ExpandIcon = styled(TriangleIcon)({
  display: 'block',
});
