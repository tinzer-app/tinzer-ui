import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';
import { TD_STYLES } from '@components/Table/constants';

interface TitleProps {
  isWithWordWrap?: boolean;
}

export const Title = styled(Text)<TitleProps>(({ isWithWordWrap }) => ({
  textAlign: isWithWordWrap ? 'center' : 'start',
  whiteSpace: isWithWordWrap ? 'pre' : 'nowrap',
}));

export const Th = styled('th')(
  css({
    ...TD_STYLES,
    py: 2,
  }),
);
