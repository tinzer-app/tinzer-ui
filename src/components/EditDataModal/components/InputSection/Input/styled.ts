import css from '@styled-system/css';
import styled from 'styled-components';

export const InputComponent = styled('input')(({ theme: { variants, colors } }) =>
  css({
    ...variants.body1Regular,
    p: 1,
    border: `1px solid ${colors.borderStrong}`,
    borderRadius: 4,
  }),
);
