import css from '@styled-system/css';
import styled from 'styled-components';

export const Label = styled('label')(({ theme: { variants } }) =>
  css({
    ...variants.body2Regular,
    mb: 2,
    color: 'textSecondary',
    display: 'block',
  }),
);
