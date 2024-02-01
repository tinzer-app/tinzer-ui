import { TagData } from '@components/Tag';
import { CheckStatus } from '@global/types';

export const getTagDataOfReportResult = (reportResult: CheckStatus): TagData => {
  switch (reportResult) {
    case CheckStatus.success: {
      return {
        title: 'пройдена',
        color: 'tagGreen',
      };
    }

    case CheckStatus.fail: {
      return {
        title: 'не пройдена',
        color: 'tagRed',
      };
    }

    default: {
      return {
        title: 'в процессе',
        color: 'tagBlue',
      };
    }
  }
};
