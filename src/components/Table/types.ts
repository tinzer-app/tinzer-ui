import { OnTableRowClick, TableHeaderData, TableRowData } from './components';

export interface TableData {
  headers: TableHeaderData[];
  rows: TableRowData[];
}

export interface TableProps {
  data: TableData;
  onRowClick?: OnTableRowClick;
  className?: string;
}
