import css from '@styled-system/css';
import styled from 'styled-components';

import { CloseIcon as CloseIconComponent } from '@icons/CloseIcon';

export const CloseIcon = styled(CloseIconComponent)({
  display: 'block',
});

export const CloseButton = styled('button')(
  css({
    p: 1,
    mt: 2,
    mr: 2,
    display: 'block',
    ml: 'auto',
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    borderRadius: 6,

    ':hover': {
      backgroundColor: 'backgroundTertiary',
    },
  }),
);

export const ModalContent = styled('div')(
  css({
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    minHeight: 500,
    maxHeight: '90vh',
    backgroundColor: 'backgroundPrimary',
    borderRadius: 6,
    outline: 0,
    overflowY: 'auto',
  }),
);

export const ModalBody = styled('div')(
  css({
    py: 6,
    px: 17,
  }),
);
