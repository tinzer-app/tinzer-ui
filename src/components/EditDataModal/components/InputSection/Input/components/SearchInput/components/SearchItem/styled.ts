import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';
import { CloseIcon } from '@icons/CloseIcon';

export const Wrapper = styled('div')(
  css({
    borderRadius: 6,
    width: 120,
    boxSizing: 'border-box',
    py: 1,
    px: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'backgroundTertiary',
  }),
);

export const Title = styled(Text)({
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  minWidth: 0,
  whiteSpace: 'nowrap',
});

export const ButtonWrapper = styled('div')(
  css({
    ml: 1,
    width: 16,
    height: 16,
  }),
);

export const DeleteButton = styled('button')(
  css({
    p: 1,
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'block',
  }),
);

export const Icon = styled(CloseIcon)({
  display: 'block',
});
