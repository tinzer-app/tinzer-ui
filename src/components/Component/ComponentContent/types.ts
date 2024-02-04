import { TagData } from '@components/Tag';
import { TextData } from '@components/Text';
import { TableData } from '@components/Table';
import { PageSectionData } from '@components/PageSection';
import { ConditionData, WidgetLinkData } from '@global/types';
import { TimestampComponentData } from '@components/TimestampComponent';

import { ComponentData } from '../types';

export enum ComponentType {
  horizontalComponentsGroup = 'horizontalComponentsGroup',
  verticalComponentsGroup = 'verticalComponentsGroup',
  tag = 'tag',
  text = 'text',
  pageSection = 'pageSection',
  link = 'link',
  table = 'table',
  timestamp = 'timestamp',
  condition = 'condition',
}

export type ComponentContentData =
  | GenericData<ComponentType.horizontalComponentsGroup, ComponentData[]>
  | GenericData<ComponentType.verticalComponentsGroup, ComponentData[]>
  | GenericData<ComponentType.tag, TagData>
  | GenericData<ComponentType.text, TextData>
  | GenericData<ComponentType.pageSection, PageSectionData>
  | GenericData<ComponentType.link, WidgetLinkData>
  | GenericData<ComponentType.table, TableData>
  | GenericData<ComponentType.timestamp, TimestampComponentData>
  | GenericData<ComponentType.condition, ConditionData>;

export interface ComponentContentProps {
  data: ComponentContentData;
}
