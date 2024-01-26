import css from '@styled-system/css';
import styled from 'styled-components';

import { NAV_SIDEBAR_WIDTH } from './NavSidebar';

export const AppContentWrapper = styled('div')(
  css({
    ml: NAV_SIDEBAR_WIDTH,
    px: 15,
    py: 7,
  }),
);
