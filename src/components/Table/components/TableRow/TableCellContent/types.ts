import { TagData } from '@components/Tag';

import { TextCellData } from './TextCell';

interface LinkCellData {
  title: string;
  to: string;
}

export enum CellTypes {
  text = 'text',
  link = 'link',
  tag = 'tag',
}

export type TableCellData =
  | GenericData<CellTypes.tag, TagData>
  | GenericData<CellTypes.text, TextCellData>
  | GenericData<CellTypes.link, LinkCellData>;

export interface TableCellContentProps {
  data: TableCellData;
}
