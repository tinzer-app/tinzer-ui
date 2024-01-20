import React, { FC } from 'react';

import { TableProps } from './types';
import { TableHeaders, TableRow } from './components';

export const Table: FC<TableProps> = ({ data, className }) => {
  const { headers, rows } = data;

  return (
    <div className={className}>
      <table>
        <TableHeaders headers={headers} />
        <tbody>
          {rows.map(rowData => (
            <TableRow data={rowData} key={rowData.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
