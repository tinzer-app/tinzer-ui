import { TagData } from '@components/Tag';
import { TimestampComponentData } from '@components/TimestampComponent';

import { TextCellData } from './TextCell';

interface LinkCellData {
  title: string;
  to: string;
}

export enum CellTypes {
  text = 'text',
  link = 'link',
  tag = 'tag',
  timestamp = 'timestamp',
}

export type TableCellData =
  | GenericData<CellTypes.tag, TagData>
  | GenericData<CellTypes.text, TextCellData>
  | GenericData<CellTypes.link, LinkCellData>
  | GenericData<CellTypes.timestamp, TimestampComponentData>;

export interface TableCellContentProps {
  data: TableCellData;
}
