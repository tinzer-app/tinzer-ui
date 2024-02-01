import React, { FC } from 'react';

import { Component } from '@components/Component';
import { PageLayout } from '@components/PageLayout';

import { useDynamicLayoutSceneData } from './data';

export const DynamicLayoutScene: FC = () => {
  const { data, isFetching, error } = useDynamicLayoutSceneData();

  const { title, data: componentsData } = data || {};

  return (
    <PageLayout title={title!} isDataEmpty={!data} isLoading={isFetching} error={error}>
      {componentsData?.map((componentData, idx) => <Component data={componentData} key={idx} />)}
    </PageLayout>
  );
};
