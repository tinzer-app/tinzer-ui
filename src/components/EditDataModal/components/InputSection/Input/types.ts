import { ConditionData } from '@global/types';

import { SearchInputConfig, SearchInputItem, TextInputConfig } from './components';

export enum InputType {
  text = 'text',
  condition = 'condition',
  search = 'search',
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

interface SearchInputData {
  items: SearchInputItem[];
}

export type InputData =
  | GenericData<InputType.text, TextInputData>
  | GenericData<InputType.condition, ConditionInputData>
  | GenericData<InputType.search, SearchInputData>;

export type InputConfig = (
  | GenericData<InputType.text, TextInputConfig>
  | GenericData<InputType.condition, ConditionData[]>
  | GenericData<InputType.search, SearchInputConfig>
) &
  AdditionalInputConfig;

export interface InputProps {
  data: InputConfig;
}
