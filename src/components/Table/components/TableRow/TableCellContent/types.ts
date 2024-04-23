import { TagData } from '@components/Tag';
import { WidgetLinkData } from '@global/types';
import { TimestampComponentData } from '@components/TimestampComponent';

import { TextCellData } from './TextCell';

export enum CellTypes {
  text = 'text',
  link = 'link',
  tag = 'tag',
  timestamp = 'timestamp',
  verticalGroup = 'verticalGroup',
}

export type TableCellData =
  | GenericData<CellTypes.verticalGroup, TableCellData[]>
  | GenericData<CellTypes.tag, TagData>
  | GenericData<CellTypes.text, TextCellData>
  | GenericData<CellTypes.link, WidgetLinkData>
  | GenericData<CellTypes.timestamp, TimestampComponentData>;

export interface TableCellContentProps {
  data: TableCellData;
}
