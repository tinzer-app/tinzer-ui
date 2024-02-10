import { ItemType } from '@global/types';

import { GetSnackbarTitleParams } from './types';

export const getSnackbarTitle = ({ params: { data }, success }: GetSnackbarTitleParams) => {
  switch (data.type) {
    case ItemType.project: {
      return success
        ? `проект "${data.data.title}" изменен`
        : `не удалось изменить проект "${data.data.title}"`;
    }

    case ItemType.condition: {
      return success
        ? `правило "${data.data.title}" изменено`
        : `не удалось изменить правило "${data.data.title}"`;
    }

    case ItemType.inspection: {
      return success
        ? `проверка "${data.data.title}" изменена`
        : `не удалось изменить проверку "${data.data.title}"`;
    }

    default: {
      return '';
    }
  }
};
