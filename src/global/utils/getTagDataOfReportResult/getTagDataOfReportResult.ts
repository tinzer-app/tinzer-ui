import { TagData } from '@components/Tag';
import { InspectionStatus } from '@global/types';

export const getTagDataOfReportResult = (reportResult: InspectionStatus): TagData => {
  switch (reportResult) {
    case InspectionStatus.success: {
      return {
        title: 'пройдена',
        color: 'tagGreen',
      };
    }

    case InspectionStatus.fail: {
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
