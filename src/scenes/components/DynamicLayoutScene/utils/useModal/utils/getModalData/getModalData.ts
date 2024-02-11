import { EditDataModalData } from '@components/EditDataModal';
import { PaginationTableSceneType } from '@scenes/components/PaginationTableScene/data';
import {
  CheckPageData,
  ConditionPageData,
  ProjectPageData,
} from '@scenes/components/DynamicLayoutScene/data';

import { GetModalDataParams } from './types';
import { getConditionModalData, getInspectionModalData, getProjectModalData } from './utils';

export const getModalData = ({
  locationId,
  responseData,
}: GetModalDataParams): EditDataModalData => {
  if (!responseData) {
    return {
      title: '',
      inputSections: [],
      buttons: [],
    };
  }

  const { data } = responseData;

  switch (locationId) {
    case PaginationTableSceneType.projects: {
      return getProjectModalData(data as ProjectPageData);
    }

    case PaginationTableSceneType.conditions: {
      return getConditionModalData(data as ConditionPageData);
    }

    case PaginationTableSceneType.inspections: {
      return getInspectionModalData(data as CheckPageData);
    }

    default: {
      return getProjectModalData(data as ProjectPageData);
    }
  }
};
