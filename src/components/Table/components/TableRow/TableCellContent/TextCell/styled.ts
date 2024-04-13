import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';

export const Title = styled(Text)({
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});

export const Subtitle = styled(Text)(
  css({
    mt: 1,
  }),
);
