import { TableCellData } from './TableCellContent';

export type OnTableRowClick = (row: TableRowData) => void;

export interface TableRowData {
  cells: TableCellData[];
  id: string;
}

export interface TableRowProps {
  data: TableRowData;
  onRowClick?: OnTableRowClick;
}
