import { GeneralConditionData, GeneralItemData, GeneralProjectData, ItemType } from '@global/types';

type QueryCallback = (params: QueryParams) => void;

interface WithId {
  id: string;
}

interface InspectionData extends GeneralItemData {
  conditions: WithId[];
  prjects: WithId[];
}

export type QueryData =
  | GenericData<ItemType.project, GeneralProjectData>
  | GenericData<ItemType.condition, GeneralConditionData>
  | GenericData<ItemType.inspection, InspectionData>;

export interface QueryParams {
  data: QueryData;
}

export interface UseCreateItemQueryParams {
  onErrorFetch: QueryCallback;
  onSuccessFetch: QueryCallback;
}
