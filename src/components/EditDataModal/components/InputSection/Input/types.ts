import { ConditionData } from '@global/types';

import { TextInputConfig } from './components';

export enum InputType {
  text = 'text',
  condition = 'condition',
}

export interface AdditionalInputConfig {
  id: string;
}

interface TextInputData {
  value?: string;
  isRequired?: boolean;
}

interface ConditionInputData {
  conditions: ConditionData[];
}

export type InputData =
  | GenericData<InputType.text, TextInputData>
  | GenericData<InputType.condition, ConditionInputData>;

export type InputConfig = (
  | GenericData<InputType.text, TextInputConfig>
  | GenericData<InputType.condition, ConditionData[]>
) &
  AdditionalInputConfig;

export interface InputProps {
  data: InputConfig;
}
