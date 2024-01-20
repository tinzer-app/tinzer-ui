import { ReactNode } from 'react';

type ThemeColor = string;
type ThemeVariant = string;

export interface TextData {
  value: string;
  color?: ThemeColor | null;
  variant?: ThemeVariant | null;
}

export interface TextProps extends Omit<TextData, 'value'> {
  children?: ReactNode;
  className?: string;
}
