import { ItemType } from '@global/types';

import { GetSnackbarTitleParams } from './types';

export const getSnackbarTitle = ({ data, success }: GetSnackbarTitleParams) => {
  switch (data.type) {
    case ItemType.project: {
      return success
        ? `проект "${data.data.title}" создан`
        : `не удалось создать проект "${data.data.title}"`;
    }

    default: {
      return '';
    }
  }
};
