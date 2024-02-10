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
  LINK_ID,
  PROJECTS_ID,
  TITLE_ID,
} from '../../constants';
import { QueryData } from '../useSaveItemMutation';
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
          branch: getTextValue(BRANCH_ID),
          link: getTextValue(LINK_ID),
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
