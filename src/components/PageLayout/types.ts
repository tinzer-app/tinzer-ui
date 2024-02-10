import { ControlData } from '@global/types';
import { LayoutProps } from '@components/Layout';

export interface PageLayoutProps extends LayoutProps {
  title: string;
  controls?: ControlData[];
}
