import React from 'react';

import { ConditionType } from '@global/types';

import { NodeType, Node } from './Node';
import { GetNodesParams } from './types';
import { getFileExistenceNode, getStringMatchingNode } from './utils';

export const getNodes = ({
  isPossibleToAddCondition,
  conditions,
  onAddCondition,
  onAddPathToMatchingCondition,
  onAddPathToExistenceCondition,
  onAddStringToMatchingCondition,
  onChangePathExistenceCondition,
  onChangePathMatchingCondition,
  onChangePatternMatchingCondition,
  onDeleteCondition,
  onDeletePathExistenceCondition,
  onDeletePathMatchingCondition,
  onDeletePatternMatchingCondition,
}: GetNodesParams) => {
  const nodes = conditions.map(condition => {
    switch (condition.type) {
      case ConditionType.fileExistence: {
        return getFileExistenceNode({
          params: condition.params,
          onAddPathToExistenceCondition,
          onChangePathExistenceCondition,
          onDeleteCondition,
          onDeletePathExistenceCondition,
        });
      }

      default: {
        return getStringMatchingNode({
          params: condition.params,
          onAddPathToMatchingCondition,
          onAddStringToMatchingCondition,
          onChangePathMatchingCondition,
          onChangePatternMatchingCondition,
          onDeleteCondition,
          onDeletePathMatchingCondition,
          onDeletePatternMatchingCondition,
        });
      }
    }
  });

  if (isPossibleToAddCondition) {
    nodes.push({
      Element: (
        <Node
          data={{
            type: NodeType.button,
            data: {
              title: 'добавить условие',
              onClick: onAddCondition,
            },
          }}
        />
      ),
    });
  }

  return nodes;
};
