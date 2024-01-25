import css from '@styled-system/css';
import styled from 'styled-components';

import { TD_STYLES } from '@components/Table/constants';

interface CoreTableRowProps {
  isClickable?: boolean | null;
}

export const Tr = styled('tr')<CoreTableRowProps>(({ isClickable }) =>
  css({
    ':hover': {
      backgroundColor: isClickable ? 'backgroundSecondary' : 'transparent',
    },

    cursor: isClickable ? 'pointer' : 'initial',
  }),
);

export const Td = styled('td')(css(TD_STYLES));
