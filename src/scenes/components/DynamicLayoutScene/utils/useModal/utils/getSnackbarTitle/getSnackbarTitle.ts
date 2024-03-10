import { ItemType } from '@global/types';
import { getEllipsisText } from '@global/utils';

import { GetSnackbarTitleParams } from './types';

export const getSnackbarTitle = ({ params: { data }, success }: GetSnackbarTitleParams) => {
  switch (data.type) {
    case ItemType.project: {
      return success
        ? `проект "${getEllipsisText(data.data.title)}" изменен`
        : `не удалось изменить проект "${getEllipsisText(data.data.title)}"`;
    }

    case ItemType.condition: {
      return success
        ? `правило "${getEllipsisText(data.data.title)}" изменено`
        : `не удалось изменить правило "${getEllipsisText(data.data.title)}"`;
    }

    case ItemType.inspection: {
      return success
        ? `проверка "${getEllipsisText(data.data.title)}" изменена`
        : `не удалось изменить проверку "${getEllipsisText(data.data.title)}"`;
    }

    default: {
      return '';
    }
  }
};
