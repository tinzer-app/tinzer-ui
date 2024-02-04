import { TagData } from '@components/Tag';
import { TextData } from '@components/Text';
import { TableData } from '@components/Table';
import { WidgetLinkData } from '@global/types';
import { PageSectionData } from '@components/PageSection';
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
}

export type ComponentContentData =
  | GenericData<ComponentType.horizontalComponentsGroup, ComponentData[]>
  | GenericData<ComponentType.verticalComponentsGroup, ComponentData[]>
  | GenericData<ComponentType.tag, TagData>
  | GenericData<ComponentType.text, TextData>
  | GenericData<ComponentType.pageSection, PageSectionData>
  | GenericData<ComponentType.link, WidgetLinkData>
  | GenericData<ComponentType.table, TableData>
  | GenericData<ComponentType.timestamp, TimestampComponentData>;

export interface ComponentContentProps {
  data: ComponentContentData;
}
