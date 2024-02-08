import css from '@styled-system/css';
import styled from 'styled-components';

import { PlusIcon } from '@icons/PlusIcon';
import { CloseIcon } from '@icons/CloseIcon';
import { LEAF_OFFSET } from '@components/TreeStructure';

const Button = styled('button')(
  css({
    display: 'block',
    p: 1,
    cursor: 'pointer',
    border: 'none',
    backgroundColor: 'transparent',
  }),
);

export const Wrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const AddButton = styled(Button)(
  css({
    display: 'flex',
    alignItems: 'center',
    ml: `${-LEAF_OFFSET}px`,
  }),
);

export const AddIcon = styled(PlusIcon)(
  css({
    display: 'block',
    mr: 2,
  }),
);

export const DeleteIcon = styled(CloseIcon)({
  display: 'block',
});

export const DeleteButton = styled(Button)(
  css({
    ml: 2,
    borderRadius: 6,

    ':hover': {
      backgroundColor: 'backgroundTertiary',
    },
  }),
);
