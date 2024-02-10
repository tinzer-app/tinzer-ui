import { ControlData, ItemType } from '@global/types';
import { ComponentData } from '@components/Component';

import { CheckPageData, ConditionPageData, ProjectPageData } from './utils';

export type ResponseData =
  | GenericData<ItemType.project, ProjectPageData>
  | GenericData<ItemType.condition, ConditionPageData>
  | GenericData<ItemType.inspection, CheckPageData>;

export interface DynamicLayoutSceneData {
  title: string;
  data: ComponentData[];
  controls?: ControlData[];
}

export interface GetParsedDynamicLayoutDataParams {
  onModalOpen: () => void;
  responseData?: ResponseData | null;
}
