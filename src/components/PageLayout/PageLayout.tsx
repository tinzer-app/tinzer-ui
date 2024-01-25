import React, { FC } from 'react';

import { Text } from '@components/Text';

import { Layout } from './Layout';
import { PageLayoutProps } from './types';
import { Header } from './styled';

export const PageLayout: FC<PageLayoutProps> = ({ title, ...layoutProps }) => (
  <div>
    <Header>
      <Text as="h1" variant="h1Semibold">
        {title}
      </Text>
    </Header>
    <Layout {...layoutProps} />
  </div>
);
