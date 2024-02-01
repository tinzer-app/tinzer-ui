import { WidgetLinkData } from '@global/types';

import { TableCellData } from './TableCellContent';

export type OnTableRowClick = (row: TableRowData) => void;

export interface TableRowData {
  cells: TableCellData[];
  id: string;
  link?: WidgetLinkData | null;
}

export interface TableRowProps {
  data: TableRowData;
  onRowClick?: OnTableRowClick;
}
