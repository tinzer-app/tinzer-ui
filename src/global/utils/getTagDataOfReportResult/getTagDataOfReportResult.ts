import { TagData } from '@components/Tag';
import { ReportResult } from '@global/types';

export const getTagDataOfReportResult = (reportResult: ReportResult): TagData => {
  switch (reportResult) {
    case ReportResult.success: {
      return {
        title: 'пройдена',
        color: 'tagGreen',
      };
    }

    case ReportResult.fail: {
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
