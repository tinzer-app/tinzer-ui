import { CellTypes, TableData } from '@components/Table';

import { ConditionData } from './types';
import { getTextDataOfConditionType } from '@global/utils';

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
    ({ title, description, creationTimestamp, lastEditionTimestamp, id, conditionsTypes }) => ({
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
          type: CellTypes.verticalGroup,
          data: conditionsTypes.map(type => ({
            type: CellTypes.text,
            data: getTextDataOfConditionType(type),
          })),
        },
      ],
    }),
  ),
});
