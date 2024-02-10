import css from '@styled-system/css';
import styled from 'styled-components';

export const Button = styled('button')(
  css({
    p: 1,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
  }),
);
