import { SearchInputItem } from '../../SearchItem';

export interface QueryParams {
  searchValue?: string;
}

export interface SearchInputQueryConfig {
  endpoint: string;
}

export interface UseSearchItemsDataParams {
  config: SearchInputQueryConfig;
}

export interface GetSearchItemsDataParams {
  endpoint: string;
  queryParams: QueryParams;
}

export interface ResponseData {
  items: SearchInputItem[];
}
