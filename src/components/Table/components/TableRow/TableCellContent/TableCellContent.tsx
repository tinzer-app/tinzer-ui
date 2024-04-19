import React, { FC } from 'react';

import { Tag } from '@components/Tag';
import { TimestampComponent } from '@components/TimestampComponent';

import { Link } from './styled';
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
      const { title, to, isInNewTab = true } = data.data;
      const target = isInNewTab ? '_blank' : undefined;

      return (
        !!title && (
          <Link href={to} variant="body2Regular" target={target} isWithStopPropagation>
            {title}
          </Link>
        )
      );
    }

    default: {
      return null;
    }
  }
};
