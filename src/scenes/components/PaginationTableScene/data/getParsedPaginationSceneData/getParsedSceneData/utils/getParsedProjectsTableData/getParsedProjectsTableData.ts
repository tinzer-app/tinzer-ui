import { getTagDataOfReportResult } from '@global/utils';
import { CellTypes, TableData } from '@components/Table';

import { ProjectData } from './types';

export const getParsedProjectsTableData = (projectsData: ProjectData[]): TableData => ({
  headers: [
    {
      title: 'название',
    },
    {
      title: 'ветка',
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
      repository: { link, branch },
      title,
      description,
      id,
      creationTimestamp,
      lastEditionTimestamp,
      lastInspectionStatus,
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
              value: branch,
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
            timestamp: creationTimestamp,
          },
        },
        {
          type: CellTypes.timestamp,
          data: {
            timestamp: lastEditionTimestamp,
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
