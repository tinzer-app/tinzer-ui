import { ComponentData } from '@components/Component';

import { CheckPageData, ConditionPageData, ProjectPageData } from './utils';

export enum DynamicLayoutSceneType {
  project = 'project',
  condition = 'condition',
  inspection = 'inspection',
}

export type ResponseData =
  | GenericData<DynamicLayoutSceneType.project, ProjectPageData>
  | GenericData<DynamicLayoutSceneType.condition, ConditionPageData>
  | GenericData<DynamicLayoutSceneType.inspection, CheckPageData>;

export interface DynamicLayoutSceneData {
  title: string;
  data: ComponentData[];
}
