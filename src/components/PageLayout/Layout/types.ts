import { ReactNode } from 'react';

export interface LayoutProps {
  children: ReactNode;
  isLoading: boolean;
  isDataEmpty: boolean;
  error?: any;
}
