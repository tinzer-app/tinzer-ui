import React, { FC } from 'react';

import { AppTitle, NavSection, Wrapper } from './styled';

export const NavSidebar: FC = () => (
  <Wrapper>
    <AppTitle />
    <NavSection />
  </Wrapper>
);
