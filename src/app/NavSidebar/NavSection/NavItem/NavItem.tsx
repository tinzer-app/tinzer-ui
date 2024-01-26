import React, { FC } from 'react';

import { Link, Icon } from './styled';
import { NavItemProps } from './types';

export const NavItem: FC<NavItemProps> = ({ data }) => {
  const { title, to, icon } = data;

  return (
    <li>
      <Link to={to}>
        <Icon type={icon} />
        {title}
      </Link>
    </li>
  );
};
