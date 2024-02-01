import { TextData } from '@components/Text';

export interface TextCellData {
  title: TextData;
  subtitles?: TextData[] | null;
}

export interface TextCellProps {
  data: TextCellData;
}
