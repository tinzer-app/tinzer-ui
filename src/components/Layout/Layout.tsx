import React, { FC } from 'react';

import { LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({ isLoading, isDataEmpty, error, children }) => {
  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>L</>;
  }

  if (isDataEmpty) {
    return <>Emp</>;
  }

  return <>{children}</>;
};
