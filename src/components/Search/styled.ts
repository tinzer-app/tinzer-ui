import css from '@styled-system/css';
import styled from 'styled-components';

import { CloseIcon as CloseIconComponent } from '@icons/CloseIcon';
import { SearchIcon as SearchIconComponent } from '@icons/SearchIcon';

export const CloseIcon = styled(CloseIconComponent)({
  display: 'block',
});

export const SearchIcon = styled(SearchIconComponent)({
  display: 'block',
});

export const SearchWrapper = styled('div')(({ theme: { colors } }) =>
  css({
    py: 1,
    px: 2,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
    border: `1px solid ${colors.borderStrong}`,
    width: '100%',
    boxSizing: 'border-box',
    cursor: 'pointer',
    backgroundColor: 'transparent',
  }),
);

export const IconWrapper = styled('div')(
  css({
    p: 1,
  }),
);

export const ClearButton = styled('button')(
  css({
    p: 1,
    border: 'none',
    m: 0,
    background: 'transparent',
    cursor: 'pointer',
  }),
);

export const Input = styled('input')(({ theme: { variants } }) =>
  css({
    ...variants.body2Regular,
    cursor: 'text',
    py: 1,
    px: 2,
    width: '100%',
    backgroundColor: 'inherit',
    outline: 'none',
    border: 'none',
  }),
);
