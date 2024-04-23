import { getTagDataOfReportResult } from '@global/utils';
import { CellTypes, TableData } from '@components/Table';

import { ReportData } from './types';

export const getParsedReportsTableData = (reportsData: ReportData[]): TableData => ({
  headers: [
    {
      title: 'название',
    },
    {
      title: 'описание',
    },
    {
      title: 'время последней проверки',
    },
    {
      title: 'статус последней проверки',
    },
  ],
  rows: reportsData.map(
    ({ id, title, description, lastInspectionTimestamp, lastInspectionStatus }) => ({
      id,
      link: {
        to: id,
      },
      cells: [
        {
          type: CellTypes.text,
          data: {
            title: {
              value: title,
            },
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: description,
            },
          },
        },
        {
          type: CellTypes.timestamp,
          data: {
            timestamp: lastInspectionTimestamp,
          },
        },
        {
          type: CellTypes.tag,
          data: getTagDataOfReportResult(lastInspectionStatus),
        },
      ],
    }),
  ),
});
