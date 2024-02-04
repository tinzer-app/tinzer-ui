import { getCheckPageData, getConditionPageData, getProjectPageData } from './utils';
import { DynamicLayoutSceneData, DynamicLayoutSceneType, ResponseData } from './types';

export const getParsedDynamicLayoutData = (
  responseData?: ResponseData | null,
): DynamicLayoutSceneData | null => {
  switch (responseData?.type) {
    case DynamicLayoutSceneType.project: {
      return getProjectPageData(responseData.data);
    }

    case DynamicLayoutSceneType.condition: {
      return getConditionPageData(responseData.data);
    }

    case DynamicLayoutSceneType.inspection: {
      return getCheckPageData(responseData.data);
    }

    default: {
      return null;
    }
  }
};
