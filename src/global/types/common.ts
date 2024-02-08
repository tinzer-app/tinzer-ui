export interface GeneralItemData {
  title: string;
  description: string;
}

export enum ItemType {
  project = 'project',
  condition = 'condition',
  inspection = 'inspection',
}

export interface WidgetLinkData {
  to: string;
  title?: string;
  isInNewTab?: boolean;
}
