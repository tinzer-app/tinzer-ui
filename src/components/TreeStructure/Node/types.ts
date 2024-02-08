import { ReactElement } from 'react';
import { SystemStyleObject } from '@styled-system/css';

export interface ExpandButtonProps {
  expandButtonStyles?: SystemStyleObject | null;
}

export interface NodeWrapperProps {
  lvl: number;
}

export interface NodeData {
  Element: ReactElement;
  expandButtonStyles?: SystemStyleObject | null;
  children?: NodeData[] | null;
}

export interface NodeProps extends NodeWrapperProps {
  data: NodeData;
}
