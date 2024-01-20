import { TextData } from '@components/Text';

export enum CellTypes {
  text = 'text',
}

export type TableCellData = GenericData<CellTypes.text, TextData>;

export interface TableCellContentProps {
  data: TableCellData;
}
