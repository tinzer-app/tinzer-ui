import React, { FC } from 'react';

import { Snackbar } from '@components/Snackbar';
import { Component } from '@components/Component';
import { PageLayout } from '@components/PageLayout';
import { EditDataModal } from '@components/EditDataModal';

import { useModal, usePageButtons } from './utils';
import { getParsedDynamicLayoutData, useDynamicLayoutSceneData } from './data';

export const DynamicLayoutScene: FC = () => {
  const { isFetching, error, responseData, refetch } = useDynamicLayoutSceneData();

  const { modal, snackbar } = useModal({ responseData, refetch });
  const { isOpen, onOpen } = modal;

  const { onRunInspection } = usePageButtons();

  const data = getParsedDynamicLayoutData({ responseData, onRunInspection, onModalOpen: onOpen });
  const { title, controls, data: componentsData } = data || {};

  return (
    <>
      <Snackbar {...snackbar} />
      {isOpen && <EditDataModal {...modal} />}
      <PageLayout
        title={title!}
        controls={controls}
        isDataEmpty={!data}
        isLoading={isFetching}
        error={error}>
        {componentsData?.map((componentData, idx) => <Component data={componentData} key={idx} />)}
      </PageLayout>
    </>
  );
};
