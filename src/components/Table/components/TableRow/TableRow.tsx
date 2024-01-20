import React, { FC } from 'react';

import { TableRowProps } from './types';
import { TableCellContent } from './TableCellContent';

export const TableRow: FC<TableRowProps> = ({ data }) => {
  const { cells } = data;

  return (
    <tr>
      {cells.map((cellData, idx) => (
        <td key={idx}>
          <TableCellContent data={cellData} />
        </td>
      ))}
    </tr>
  );
};
