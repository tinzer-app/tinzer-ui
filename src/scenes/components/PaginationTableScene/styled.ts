import css from '@styled-system/css';
import styled from 'styled-components';

import { PlusIcon } from '@icons/PlusIcon';
import { Pagination as PaginationComponent } from '@components/Pagination';

export const Pagination = styled(PaginationComponent)(
  css({
    mt: 8,
  }),
);

export const CreateItemIcon = styled(PlusIcon)({
  display: 'block',
});

export const CreateItemButton = styled('button')(
  css({
    cursor: 'pointer',
    position: 'fixed',
    left: 'calc(100vw - 80px)',
    bottom: 10,
    border: 'none',
    backgroundColor: 'transparent',
    p: 0,
  }),
);
