import React, { FC } from 'react';

import { Th, Title } from './styled';
import { TableHeadersProps } from './types';

export const TableHeaders: FC<TableHeadersProps> = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(
        ({ title, color = 'textSecondary', variant = 'caption1Regular', isWithWordWrap }, idx) => (
          <Th scope="col" key={idx}>
            <Title
              variant={variant}
              textColor={color}
              value={title}
              isWithWordWrap={isWithWordWrap}
            />
          </Th>
        ),
      )}
    </tr>
  </thead>
);
