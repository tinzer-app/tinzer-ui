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
