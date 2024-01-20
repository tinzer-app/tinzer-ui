import { TableCellData } from './TableCellContent';

export interface TableRowData {
  cells: TableCellData[];
  id: string;
}

export interface TableRowProps {
  data: TableRowData;
}
