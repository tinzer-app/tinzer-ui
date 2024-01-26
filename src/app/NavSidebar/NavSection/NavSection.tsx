import React, { FC } from 'react';
import List from '@mui/material/List';

import { NavItem } from './NavItem';
import { NAV_ITEMS } from './constants';
import { NavSectionProps } from './types';

export const NavSection: FC<NavSectionProps> = ({ className }) => (
  <nav className={className}>
    <List>
      {NAV_ITEMS.map((itemData, idx) => (
        <NavItem data={itemData} key={idx} />
      ))}
    </List>
  </nav>
);
