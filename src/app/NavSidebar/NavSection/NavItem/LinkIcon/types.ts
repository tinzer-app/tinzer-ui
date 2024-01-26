export enum NavItemIconType {
  analytics = 'analytics',
  folder = 'folder',
  checklist = 'checklist',
}

export interface LinkIconProps {
  type: NavItemIconType;
  className?: string;
}
