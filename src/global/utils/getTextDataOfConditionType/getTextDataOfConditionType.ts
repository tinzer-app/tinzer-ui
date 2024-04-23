import { ConditionType } from '@global/types';
import { TextCellData } from '@components/Table';

export const getTextDataOfConditionType = (type: ConditionType): TextCellData => {
  switch (type) {
    case ConditionType.fileExistence: {
      return {
        title: {
          value: 'наличие файлов',
          textColor: 'tagCyanActive',
          variant: 'caption1Semibold',
        },
      };
    }

    default: {
      return {
        title: {
          value: 'наличие строк в файлах',
          textColor: 'tagSkyBlueActive',
          variant: 'caption1Semibold',
        },
      };
    }
  }
};
