import React, { FC } from 'react';

import { Th, Title } from './styled';
import { TableHeadersProps } from './types';

export const TableHeaders: FC<TableHeadersProps> = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(({ title }, idx) => (
        <Th scope="col" key={idx}>
          <Title variant="caption1Regular" textColor="textSecondary" value={title} />
        </Th>
      ))}
    </tr>
  </thead>
);
