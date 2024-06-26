import { GeneralConditionData, GeneralItemData, RepositoryData, ItemType } from '@global/types';

interface WithId {
  id: string;
}

interface InspectionEntity extends WithId {
  title: String;
}

interface InspectionData extends GeneralItemData {
  conditions: InspectionEntity[];
  projects: InspectionEntity[];
}

interface ProjectRepositoryData extends Omit<RepositoryData, 'link'> {
  title: string;
  ownerNickname: string;
}

interface ProjectData extends GeneralItemData {
  repository: ProjectRepositoryData;
}

export type QueryData =
  | GenericData<ItemType.project, ProjectData>
  | GenericData<ItemType.condition, GeneralConditionData>
  | GenericData<ItemType.inspection, InspectionData>;

export interface QueryParams {
  data: QueryData;
}
