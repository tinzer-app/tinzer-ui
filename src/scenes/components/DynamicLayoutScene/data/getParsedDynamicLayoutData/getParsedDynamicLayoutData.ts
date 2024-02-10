import { ItemType } from '@global/types';

import { getCheckPageData, getConditionPageData, getProjectPageData } from './utils';
import { DynamicLayoutSceneData, GetParsedDynamicLayoutDataParams } from './types';

export const getParsedDynamicLayoutData = ({
  responseData,
  onModalOpen,
}: GetParsedDynamicLayoutDataParams): DynamicLayoutSceneData | null => {
  switch (responseData?.type) {
    case ItemType.project: {
      return getProjectPageData(responseData.data, onModalOpen);
    }

    case ItemType.condition: {
      return getConditionPageData(responseData.data, onModalOpen);
    }

    case ItemType.inspection: {
      return getCheckPageData(responseData.data, onModalOpen);
    }

    default: {
      return null;
    }
  }
};
