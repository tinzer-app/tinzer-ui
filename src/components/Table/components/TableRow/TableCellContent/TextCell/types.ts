import { TextData as CoreTextData } from '@components/Text';

export interface TextData extends CoreTextData {
  value: string;
}

export interface TextCellData {
  title: TextData;
  subtitles?: TextData[] | null;
}

export interface TextCellProps {
  data: TextCellData;
}
