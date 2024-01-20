import React, { FC } from 'react';

import { Text } from '@components/Text';

import { CellTypes, TableCellContentProps } from './types';

export const TableCellContent: FC<TableCellContentProps> = ({ data }) => {
  switch (data.type) {
    case CellTypes.text: {
      const { value, ...otherData } = data.data;

      return <Text {...otherData}>{value}</Text>;
    }

    default: {
      return null;
    }
  }
};
