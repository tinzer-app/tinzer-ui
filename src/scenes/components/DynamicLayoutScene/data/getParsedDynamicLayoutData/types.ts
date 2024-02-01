import { ComponentData } from '@components/Component';

import { CheckPageData, ConditionPageData, ProjectPageData } from './utils';

export enum DynamicLayoutSceneType {
  project = 'project',
  condition = 'condition',
  check = 'check',
}

export type ResponseData =
  | GenericData<DynamicLayoutSceneType.project, ProjectPageData>
  | GenericData<DynamicLayoutSceneType.condition, ConditionPageData>
  | GenericData<DynamicLayoutSceneType.check, CheckPageData>;

export interface DynamicLayoutSceneData {
  title: string;
  data: ComponentData[];
}
