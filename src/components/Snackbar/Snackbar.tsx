import React, { FC } from 'react';
import SnackbarComponent from '@mui/material/Snackbar';

import { Text } from '@components/Text';

import { CloseButton, Content, Icon } from './styled';
import { SnackbarProps } from './types';

export const Snackbar: FC<SnackbarProps> = ({ isOpen, onClose, title }) => (
  <SnackbarComponent open={isOpen} onClose={onClose} autoHideDuration={5000}>
    <Content>
      <Text value={title} textColor="textPrimaryInverse" variant="body2Semibold" />
      <CloseButton onClick={onClose}>
        <Icon color="textPrimaryInverse" />
      </CloseButton>
    </Content>
  </SnackbarComponent>
);
