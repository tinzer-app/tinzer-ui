import css from '@styled-system/css';
import styled from 'styled-components';

export const DateComponent = styled('time')(({ theme: { variants } }) =>
  css({
    ...variants.body2Regular,
    display: 'block',
    color: 'textPrimary',
  }),
);

export const Time = styled(DateComponent)(
  css({
    color: 'textSecondary',
  }),
);
