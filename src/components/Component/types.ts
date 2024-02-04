import { SystemStyleObject } from '@styled-system/css';

import { ComponentContentData } from './ComponentContent';

interface AdditionalComponentData {
  styles?: SystemStyleObject;
}

export type ComponentData = ComponentContentData & AdditionalComponentData;
export type ComponentWrapperProps = ComponentProps & AdditionalComponentData;

export interface ComponentProps {
  data: ComponentData;
}
