import React, { FC } from 'react';
import ModalComponent from '@mui/material/Modal';

import { ModalProps } from './types';
import { CloseButton, CloseIcon, ModalBody, ModalContent } from './styled';

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => (
  <ModalComponent open={isOpen} onClose={onClose}>
    <ModalContent>
      <CloseButton onClick={onClose}>
        <CloseIcon />
      </CloseButton>
      <ModalBody>{children}</ModalBody>
    </ModalContent>
  </ModalComponent>
);
