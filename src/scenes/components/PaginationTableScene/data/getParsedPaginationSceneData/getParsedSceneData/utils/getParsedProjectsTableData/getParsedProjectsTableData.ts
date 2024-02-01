import { getTagDataOfReportResult } from '@global/utils';
import { CellTypes, TableData } from '@components/Table';

import { ProjectData } from './types';

export const getParsedProjectsTableData = (projectsData: ProjectData[]): TableData => ({
  headers: [
    {
      title: 'название',
    },
    {
      title: 'описание',
    },
    {
      title: 'время добавления',
    },
    {
      title: 'время последнего изменения',
    },
    {
      title: 'статус последней проверки',
    },
  ],
  rows: projectsData.map(
    ({
      link,
      title,
      description,
      id,
      creationTimestamp,
      lastEditionTimestamp,
      lastReportResult,
    }) => ({
      id,
      link: {
        to: id,
      },
      cells: [
        {
          type: CellTypes.link,
          data: {
            title,
            to: link,
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
              value: creationTimestamp,
            },
            subtitles: [
              {
                value: '12:30',
              },
            ],
          },
        },
        {
          type: CellTypes.text,
          data: {
            title: {
              value: lastEditionTimestamp,
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
          data: getTagDataOfReportResult(lastReportResult),
        },
      ],
    }),
  ),
});
