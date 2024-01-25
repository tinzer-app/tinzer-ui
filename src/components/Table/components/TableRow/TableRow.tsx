import React, { FC } from 'react';

import { Td, Tr } from './styled';
import { TableRowProps } from './types';
import { TableCellContent } from './TableCellContent';

export const TableRow: FC<TableRowProps> = ({ data, onRowClick }) => {
  const { cells } = data;

  const isClickable = !!onRowClick;
  const onClick = () => onRowClick?.(data);

  return (
    <Tr isClickable={isClickable} onClick={onClick}>
      {cells.map((cellData, idx) => (
        <Td key={idx}>
          <TableCellContent data={cellData} />
        </Td>
      ))}
    </Tr>
  );
};
