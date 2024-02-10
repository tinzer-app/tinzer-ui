import React, { FC } from 'react';

import { Text } from '@components/Text';
import { Layout } from '@components/Layout';

import { PageLayoutProps } from './types';
import { Control, ControlsWrapper, Header } from './styled';

export const PageLayout: FC<PageLayoutProps> = ({ title, controls, ...layoutProps }) => (
  <div>
    <Header>
      <Text value={title} as="h1" variant="h1Semibold" />
      {!!controls?.length && (
        <ControlsWrapper>
          {controls.map((controlData, idx) => (
            <Control data={controlData} key={idx} />
          ))}
        </ControlsWrapper>
      )}
    </Header>
    <Layout {...layoutProps} />
  </div>
);
