import { ThemeColor } from '@theme/colors';
import { ThemeVariant } from '@theme/variants';

export interface TableHeaderData {
  title: string;
  variant?: ThemeVariant;
  color?: ThemeColor;
  isWithWordWrap?: boolean;
}

export interface TableHeadersProps {
  headers: TableHeaderData[];
}
