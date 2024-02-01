import { TagData } from '@components/Tag';
import { TextData } from '@components/Text';
import { TableData } from '@components/Table';
import { WidgetLinkData } from '@global/types';
import { PageSectionData } from '@components/PageSection';

export enum ComponentType {
  horizontalComponentsGroup = 'horizontalComponentsGroup',
  verticalComponentsGroup = 'verticalComponentsGroup',
  input = 'input',
  tag = 'tag',
  text = 'text',
  pageSection = 'pageSection',
  link = 'link',
  table = 'table',
}

export type ComponentData =
  | GenericData<ComponentType.horizontalComponentsGroup, ComponentData[]>
  | GenericData<ComponentType.verticalComponentsGroup, ComponentData[]>
  | GenericData<ComponentType.tag, TagData>
  | GenericData<ComponentType.text, TextData>
  | GenericData<ComponentType.pageSection, PageSectionData>
  | GenericData<ComponentType.link, WidgetLinkData>
  | GenericData<ComponentType.input, WidgetLinkData>
  | GenericData<ComponentType.table, TableData>;

export interface ComponentProps {
  data: ComponentData;
}
