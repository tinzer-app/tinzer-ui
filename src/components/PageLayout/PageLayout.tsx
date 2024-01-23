import React, { FC } from 'react';

import { Text } from '@components/Text';

import { Layout } from './Layout';
import { PageLayoutProps } from './types';

export const PageLayout: FC<PageLayoutProps> = ({ title, ...layoutProps }) => (
  <div>
    <Text>{title}</Text>
    <Layout {...layoutProps} />
  </div>
);
