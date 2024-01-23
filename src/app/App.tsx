import React, { FC } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { Scenes } from '@scenes/Scenes';
import { queryClient } from '@api/constants';

export const App: FC = () => (
  <QueryClientProvider client={queryClient}>
    <Scenes />
  </QueryClientProvider>
);
