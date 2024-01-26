import css from '@styled-system/css';
import styled from 'styled-components';

import { AppTitleIcon } from '@icons/AppTitleIcon';

import { NAV_SIDEBAR_WIDTH } from './constants';
import { NavSection as NavSectionComponent } from './NavSection';

export const Wrapper = styled('aside')(
  css({
    boxSizing: 'border-box',
    position: 'fixed',
    left: 0,
    top: 0,
    width: NAV_SIDEBAR_WIDTH,
    height: '100vh',
    p: 6,
    backgroundColor: 'backgroundSecondary',
  }),
);

export const AppTitle = styled(AppTitleIcon)({
  display: 'block',
});

export const NavSection = styled(NavSectionComponent)(
  css({
    mt: 10,
  }),
);
