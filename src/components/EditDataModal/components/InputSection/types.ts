import { InputConfig } from './Input';

export interface InputSectionData {
  label: string;
  input: InputConfig;
}

export interface InputSectionProps {
  data: InputSectionData;
  className?: string;
}
