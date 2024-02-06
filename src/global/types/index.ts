export * from './checks';
export * from './conditions';
export * from './projects';

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
