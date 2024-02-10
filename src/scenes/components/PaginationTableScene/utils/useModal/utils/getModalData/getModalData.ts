import { PaginationTableSceneType } from '@scenes/components/PaginationTableScene/data';

import { GetModalDataParams } from './types';
import { CONDITIONS_MODAL_DATA, INSPECTIONS_MODAL_DATA, PROJECTS_MODAL_DATA } from './constants';

export const getModalData = ({ locationId }: GetModalDataParams) => {
  switch (locationId) {
    case PaginationTableSceneType.projects: {
      return PROJECTS_MODAL_DATA;
    }

    case PaginationTableSceneType.conditions: {
      return CONDITIONS_MODAL_DATA;
    }

    case PaginationTableSceneType.inspections: {
      return INSPECTIONS_MODAL_DATA;
    }

    default: {
      return PROJECTS_MODAL_DATA;
    }
  }
};
