import React, { FC } from 'react';

import { Tag } from '@components/Tag';
import { Link } from '@components/Link';
import { TimestampComponent } from '@components/TimestampComponent';

import { TextCell } from './TextCell';
import { CellTypes, TableCellContentProps } from './types';

export const TableCellContent: FC<TableCellContentProps> = ({ data }) => {
  switch (data.type) {
    case CellTypes.text: {
      return <TextCell data={data.data} />;
    }

    case CellTypes.timestamp: {
      return <TimestampComponent data={data.data} />;
    }

    case CellTypes.tag: {
      return <Tag data={data.data} />;
    }

    case CellTypes.link: {
      const { title, to } = data.data;

      return (
        <Link href={to} variant="body2Regular" target="__blank" isWithStopPropagation>
          {title}
        </Link>
      );
    }

    default: {
      return null;
    }
  }
};
