import React, { FC } from 'react';

import { Node } from './Node';
import { TreeStructureProps } from './types';

export const TreeStructure: FC<TreeStructureProps> = ({ nodes, className }) => (
  <div className={className}>
    {nodes.map((nodeData, idx) => (
      <Node data={nodeData} lvl={0} key={idx} />
    ))}
  </div>
);
