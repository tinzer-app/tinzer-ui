import { NavItemIconType } from './LinkIcon';

export interface NavItemData {
  title: string;
  icon: NavItemIconType;
  to: string;
}

export interface NavItemProps {
  data: NavItemData;
}
