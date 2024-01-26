import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { theme } from '@theme/theme';
import { Scenes } from '@scenes/Scenes';
import { queryClient } from '@api/constants';
import { GlobalStyle } from '@theme/GlobalStyle';

import { NavSidebar } from './NavSidebar';
import { AppContentWrapper } from './styled';

export const App: FC = () => (
  <ThemeProvider theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <NavSidebar />
        <AppContentWrapper>
          <Scenes />
        </AppContentWrapper>
      </BrowserRouter>
    </QueryClientProvider>
  </ThemeProvider>
);
