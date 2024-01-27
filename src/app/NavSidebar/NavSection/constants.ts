import {
  CONDITIONS_PAGE_TITLE,
  PROJECTS_PAGE_TITLE,
  REPORTS_PAGE_TITLE,
} from '@scenes/components/PaginationTableScene';

import { NavItemIconType } from './NavItem';

export const NAV_ITEMS = [
  {
    title: PROJECTS_PAGE_TITLE,
    to: '/projects',
    icon: NavItemIconType.folder,
  },
  {
    title: CONDITIONS_PAGE_TITLE,
    to: '/conditions',
    icon: NavItemIconType.checklist,
  },
  {
    title: REPORTS_PAGE_TITLE,
    to: '/reports',
    icon: NavItemIconType.analytics,
  },
];
