import { ReactElement } from 'react';

export interface NodeWrapperProps {
  lvl: number;
}

export interface NodeData {
  Element: ReactElement;
  children?: NodeData[] | null;
}

export interface NodeProps extends NodeWrapperProps {
  data: NodeData;
}
