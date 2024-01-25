import React, { FC } from 'react';

import { TableProps } from './types';
import { TableHeaders, TableRow } from './components';
import { TableComponent, TableWrapper } from './styled';

export const Table: FC<TableProps> = ({ data, onRowClick, className }) => {
  const { headers, rows } = data;

  return (
    <TableWrapper className={className}>
      <TableComponent>
        <TableHeaders headers={headers} />
        <tbody>
          {rows.map(rowData => (
            <TableRow data={rowData} key={rowData.id} onRowClick={onRowClick} />
          ))}
        </tbody>
      </TableComponent>
    </TableWrapper>
  );
};
