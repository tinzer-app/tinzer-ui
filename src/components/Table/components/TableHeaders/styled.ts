import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';
import { TD_STYLES } from '@components/Table/constants';

export const Title = styled(Text)({
  textAlign: 'start',
});

export const Th = styled('th')(
  css({
    ...TD_STYLES,
    whiteSpace: 'nowrap',
    py: 2,
  }),
);
