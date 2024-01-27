import { CellTypes, TableData } from '@components/Table';

import { ConditionData } from './types';

export const getParsedConditionsTableData = (conditionsData: ConditionData[]): TableData => ({
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
      title: 'тип проверки',
    },
  ],
  rows: conditionsData.map(
    ({ title, description, creationTimestamp, lastEditionTimestamp, id }) => ({
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
          type: CellTypes.text,
          data: {
            title: {
              value: 'должны быть типы',
            },
          },
        },
      ],
    }),
  ),
});
