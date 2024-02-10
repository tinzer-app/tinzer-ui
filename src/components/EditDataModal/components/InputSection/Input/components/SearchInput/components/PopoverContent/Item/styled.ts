import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';
import { CheckIcon as CheckIconComponent } from '@icons/CheckIcon';

export const Title = styled(Text)({
  textOverflow: 'ellipsis',
});

export const CheckIcon = styled(CheckIconComponent)({
  display: 'block',
});

export const CheckIconWrapper = styled('div')(
  css({
    ml: 2,
    height: 16,
    width: 16,
  }),
);

export const Wrapper = styled('button')(
  css({
    px: 3,
    py: 2,
    width: '100%',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    ':hover': {
      backgroundColor: 'backgroundSecondary',
    },
  }),
);
