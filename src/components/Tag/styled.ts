import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';
import { ThemeColor } from '@theme/colors';

interface TagComponentProps {
  color: ThemeColor;
}

export const TagComponent = styled(Text)<TagComponentProps>(({ theme: { colors }, color }) =>
  css({
    whiteSpace: 'nowrap',
    width: 'fit-content',
    borderRadius: 4,
    py: 1,
    px: 2,
    backgroundColor: colors[color],
  }),
);
