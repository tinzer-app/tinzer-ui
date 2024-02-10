import { SearchInputItem, SearchInputQueryConfig } from './components';

export interface SearchItemsWrapperProps {
  isValid: boolean;
}

export interface SearchInputConfig {
  initItems: SearchInputItem[];
  queryConfig: SearchInputQueryConfig;
}

export interface SearchInputProps {
  data: Omit<SearchInputConfig, 'initItems'>;
  id: string;
}
