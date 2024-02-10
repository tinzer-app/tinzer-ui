import { ReactNode } from 'react';

export interface LayoutProps {
  isLoading: boolean;
  isDataEmpty: boolean;
  children?: ReactNode;
  error?: any;
}
