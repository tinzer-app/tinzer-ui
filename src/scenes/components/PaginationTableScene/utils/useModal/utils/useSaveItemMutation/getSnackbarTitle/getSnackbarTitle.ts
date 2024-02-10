import { ItemType } from '@global/types';

import { GetSnackbarTitleParams } from './types';

export const getSnackbarTitle = ({ data, success }: GetSnackbarTitleParams) => {
  switch (data.type) {
    case ItemType.project: {
      return success
        ? `проект "${data.data.title}" создан`
        : `не удалось создать проект "${data.data.title}"`;
    }

    case ItemType.condition: {
      return success
        ? `правило "${data.data.title}" создано`
        : `не удалось создать правило "${data.data.title}"`;
    }

    case ItemType.inspection: {
      return success
        ? `проверка "${data.data.title}" создана`
        : `не удалось создать проверку "${data.data.title}"`;
    }

    default: {
      return '';
    }
  }
};
