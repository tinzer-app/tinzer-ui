import { ItemType } from '@global/types';

import { getCheckPageData, getConditionPageData, getProjectPageData } from './utils';
import { DynamicLayoutSceneData, GetParsedDynamicLayoutDataParams } from './types';

export const getParsedDynamicLayoutData = ({
  responseData,
  ...restParams
}: GetParsedDynamicLayoutDataParams): DynamicLayoutSceneData | null => {
  switch (responseData?.type) {
    case ItemType.project: {
      return getProjectPageData({ data: responseData.data, ...restParams });
    }

    case ItemType.condition: {
      return getConditionPageData({ data: responseData.data, ...restParams });
    }

    case ItemType.inspection: {
      return getCheckPageData({ data: responseData.data, ...restParams });
    }

    default: {
      return null;
    }
  }
};
