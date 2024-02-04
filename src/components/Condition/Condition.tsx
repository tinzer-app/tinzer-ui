import React, { FC } from 'react';

import { TreeStructure } from '@components/TreeStructure';

import { getNodes } from './getNodes';
import { ConditionProps } from './types';

export const Condition: FC<ConditionProps> = ({ data }) => {
  const nodes = getNodes(data);

  return <TreeStructure nodes={nodes} />;
};
