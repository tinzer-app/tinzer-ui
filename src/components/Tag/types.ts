import { ThemeColor } from '@theme/colors';

export interface TagData {
  title: string;
  color: ThemeColor;
}

export interface TagProps {
  data: TagData;
  className?: string;
}
