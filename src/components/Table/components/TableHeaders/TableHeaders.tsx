import React, { FC } from 'react';

import { TableHeadersProps } from './types';

export const TableHeaders: FC<TableHeadersProps> = ({ headers }) => (
  <thead>
    <tr>
      {headers.map((headerData, idx) => (
        <th scope="col" key={idx}>
          {headerData.title}
        </th>
      ))}
    </tr>
  </thead>
);
