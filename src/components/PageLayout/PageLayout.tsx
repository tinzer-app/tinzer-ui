import React, { FC } from 'react';

import { Text } from '@components/Text';

import { Layout } from './Layout';
import { PageLayoutProps } from './types';
import { Header } from './styled';

export const PageLayout: FC<PageLayoutProps> = ({ title, ...layoutProps }) => (
  <div>
    <Header>
      <Text value={title} as="h1" variant="h1Semibold" />
    </Header>
    <Layout {...layoutProps} />
  </div>
);
