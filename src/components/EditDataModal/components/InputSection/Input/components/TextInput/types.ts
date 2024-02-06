import { HTMLInputTypeAttribute } from 'react';

import { AdditionalInputConfig } from '../../types';

export interface TextInputConfig {
  initValue?: string;
  inputType?: HTMLInputTypeAttribute | 'textArea';
  isRequired?: boolean;
}

export interface TextInputProps extends AdditionalInputConfig {
  data: TextInputConfig;
}
