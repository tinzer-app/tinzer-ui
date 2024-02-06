import { ItemType } from '@global/types';
import { getTextFieldFormData } from '@components/EditDataModal';
import { PaginationTableSceneType } from '@scenes/components/PaginationTableScene/data';

import { BRANCH_ID, DESCRIPTION_ID, LINK_ID, TITLE_ID } from '../../constants';
import { QueryData } from '../useSaveItemMutation';
import { GetRequestDataParams } from './types';

export const getRequestData = ({
  locationId,
  formData,
}: GetRequestDataParams): QueryData | null => {
  const getTextValue = (id: string) => getTextFieldFormData({ id, formData }) || '';

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

    default: {
      return null;
    }
  }
};
