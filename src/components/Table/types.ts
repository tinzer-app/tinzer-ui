import { TableHeaderData, TableRowData } from './components';

interface TableData {
  headers: TableHeaderData[];
  rows: TableRowData[];
}

export interface TableProps {
  data: TableData;
  className?: string;
}
