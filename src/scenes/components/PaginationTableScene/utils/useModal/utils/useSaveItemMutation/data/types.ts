import { GeneralConditionData, GeneralProjectData, ItemType } from '@global/types';

type QueryCallback = (params: QueryParams) => void;

export type QueryData =
  | GenericData<ItemType.project, GeneralProjectData>
  | GenericData<ItemType.condition, GeneralConditionData>;

export interface QueryParams {
  data: QueryData;
}

export interface UseCreateItemQueryParams {
  onErrorFetch: QueryCallback;
  onSuccessFetch: QueryCallback;
}
