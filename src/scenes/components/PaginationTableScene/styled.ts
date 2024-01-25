import css from '@styled-system/css';
import styled from 'styled-components';

import { Pagination as PaginationComponent } from '@components/Pagination';

export const Pagination = styled(PaginationComponent)(
  css({
    mt: 8,
  }),
);
