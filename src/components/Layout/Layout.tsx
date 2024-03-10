import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

import { Text } from '@components/Text';

import { LayoutProps } from './types';
import { TextPlugWrapper, Subtitle, LoadingPlugWrapper } from './styled';

export const Layout: FC<LayoutProps> = ({ isLoading, error, isDataEmpty, children }) => {
  if (error) {
    return (
      <TextPlugWrapper>
        <Text value="Что-то пошло не так..." variant="h4Semibold" textColor="textPrimary" />
        <Subtitle
          value="Попробуйте перезагрузить страницу или зайти позже."
          variant="body2Semibold"
          textColor="textSecondary"
        />
      </TextPlugWrapper>
    );
  }

  if (isLoading) {
    return (
      <LoadingPlugWrapper>
        <CircularProgress size={40} />
      </LoadingPlugWrapper>
    );
  }

  if (isDataEmpty) {
    return (
      <TextPlugWrapper>
        <Text value="Ничего не нашлось..." variant="h4Semibold" textColor="textPrimary" />
        <Subtitle
          value="На текущий момент данных нет."
          variant="body2Semibold"
          textColor="textSecondary"
        />
      </TextPlugWrapper>
    );
  }

  return <>{children}</>;
};
