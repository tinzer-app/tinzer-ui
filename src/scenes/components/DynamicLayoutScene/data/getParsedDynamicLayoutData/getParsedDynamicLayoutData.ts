import { ItemType } from '@global/types';

import { getCheckPageData, getConditionPageData, getProjectPageData } from './utils';
import { DynamicLayoutSceneData, ResponseData } from './types';

export const getParsedDynamicLayoutData = (
  responseData?: ResponseData | null,
): DynamicLayoutSceneData | null => {
  switch (responseData?.type) {
    case ItemType.project: {
      return getProjectPageData(responseData.data);
    }

    case ItemType.condition: {
      return getConditionPageData(responseData.data);
    }

    case ItemType.inspection: {
      return getCheckPageData(responseData.data);
    }

    default: {
      return null;
    }
  }
};
