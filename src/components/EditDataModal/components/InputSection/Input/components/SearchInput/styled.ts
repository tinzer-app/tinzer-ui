import css from '@styled-system/css';
import styled from 'styled-components';

import { PlusIcon } from '@icons/PlusIcon';

import { INVALID_INPUT_BOX_SHADOW } from '../../constants';
import { SearchItemsWrapperProps } from './types';

export const SearchItemsWrapper = styled('div')<SearchItemsWrapperProps>(
  ({ theme: { colors }, isValid }) =>
    css({
      p: 1,
      border: `1px solid ${colors.borderStrong}`,
      borderRadius: 4,
      display: 'flex',
      flexWrap: 'wrap',
      rowGap: 1,
      columnGap: 1,
      maxWidth: 300,
      boxSizing: 'border-box',

      ...(isValid
        ? {}
        : {
            borderColor: colors.error,
            boxShadow: INVALID_INPUT_BOX_SHADOW,
          }),
    }),
);

export const AddItemButton = styled('button')(
  css({
    p: 1,
    cursor: 'pointer',
    display: 'block',
    background: 'none',
    border: 'none',
    ml: 1,
  }),
);

export const AddItemIcon = styled(PlusIcon)({
  display: 'block',
});
