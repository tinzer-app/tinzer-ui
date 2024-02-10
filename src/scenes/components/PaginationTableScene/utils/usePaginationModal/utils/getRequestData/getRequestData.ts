import { ItemType } from '@global/types';
import { PaginationTableSceneType } from '@scenes/components/PaginationTableScene/data';
import {
  getConditions as getConditionsFormData,
  getTextFieldFormData,
  getSearchItems as getSearchItemsFromData,
} from '@components/EditDataModal';

import {
  BRANCH_ID,
  CONDITIONS_ID,
  DESCRIPTION_ID,
  OWNER_NICKNAME_ID,
  PROJECTS_ID,
  REPOSITORY_TITLE_ID,
  TITLE_ID,
} from '../../constants';
import { QueryData } from '../mutationFn';
import { GetRequestDataParams } from './types';

export const getRequestData = ({
  locationId,
  formData,
}: GetRequestDataParams): QueryData | null => {
  const getTextValue = (id: string) => getTextFieldFormData({ id, formData }) || '';
  const getConditions = (id: string) => getConditionsFormData(formData, id);
  const getSearchItems = (id: string) => getSearchItemsFromData(formData, id);

  const generalData = {
    title: getTextValue(TITLE_ID),
    description: getTextValue(DESCRIPTION_ID),
  };

  switch (locationId) {
    case PaginationTableSceneType.projects: {
      return {
        type: ItemType.project,
        data: {
          ...generalData,
          repository: {
            branch: getTextValue(BRANCH_ID),
            title: getTextValue(REPOSITORY_TITLE_ID),
            ownerNickname: getTextValue(OWNER_NICKNAME_ID),
          },
        },
      };
    }

    case PaginationTableSceneType.conditions: {
      return {
        type: ItemType.condition,
        data: {
          ...generalData,
          conditions: getConditions(CONDITIONS_ID),
        },
      };
    }

    case PaginationTableSceneType.inspections: {
      return {
        type: ItemType.inspection,
        data: {
          ...generalData,
          conditions: getSearchItems(CONDITIONS_ID),
          prjects: getSearchItems(PROJECTS_ID),
        },
      };
    }

    default: {
      return null;
    }
  }
};
