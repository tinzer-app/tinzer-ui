import css from '@styled-system/css';
import styled from 'styled-components';

import { Text } from '@components/Text';

const PLUG_MIN_HEIGHT = 200;

export const LoadingPlugWrapper = styled('div')({
  minHeight: PLUG_MIN_HEIGHT,
  height: '100%',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Subtitle = styled(Text)(
  css({
    mt: 1,
  }),
);

export const TextPlugWrapper = styled(LoadingPlugWrapper)({
  textAlign: 'center',
  flexDirection: 'column',
});
