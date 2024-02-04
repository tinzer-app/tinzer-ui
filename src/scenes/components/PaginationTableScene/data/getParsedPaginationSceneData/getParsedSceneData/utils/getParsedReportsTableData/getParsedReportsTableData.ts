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
    {
      title: 'кол-во правил',
    },
  ],
  rows: reportsData.map(
    ({
      id,
      title,
      description,
      lastInspectionTimestamp,
      lastInspectionStatus,
      conditionsCount,
    }) => ({
      id,
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
          type: CellTypes.text,
          data: {
            title: {
              value: lastInspectionTimestamp,
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.tag,
          data: getTagDataOfReportResult(lastInspectionStatus),
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: conditionsCount.toString(),
            },
          },
        },
      ],
    }),
  ),
});
