import { TextInputConfig } from './components';

export enum InputType {
  text = 'text',
}

export interface AdditionalInputConfig {
  id: string;
}

interface TextInputData {
  value?: string;
}

export type InputData = GenericData<InputType.text, TextInputData>;

export type InputConfig = GenericData<InputType.text, TextInputConfig> & AdditionalInputConfig;

export interface InputProps {
  data: InputConfig;
}
