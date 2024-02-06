import { PaginationTableSceneType } from '@scenes/components/PaginationTableScene/data';

import { GetModalDataParams } from './types';
import { PROJECTS_MODAL_DATA } from './constants';

export const getModalData = ({ locationId }: GetModalDataParams) => {
  switch (locationId) {
    case PaginationTableSceneType.projects: {
      return PROJECTS_MODAL_DATA;
    }

    default: {
      return PROJECTS_MODAL_DATA;
    }
  }
};
