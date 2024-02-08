import React from 'react';

import { ConditionType } from '@global/types';
import { NodeData } from '@components/TreeStructure';
import { INVALID_INPUT_BOX_SHADOW } from '@components/EditDataModal';

import { Node, NodeType } from '../../Node';
import { GetFileExistenceNodeParams } from './types';

export const getFileExistenceNode = ({
  params,
  onAddPathToExistenceCondition,
  onChangePathExistenceCondition,
  onDeleteCondition,
  onDeletePathExistenceCondition,
}: GetFileExistenceNodeParams): NodeData => ({
  Element: (
    <Node
      data={{
        type: NodeType.text,
        data: {
          title: 'наличие файлов',
          onDeleteItem: () => onDeleteCondition(ConditionType.fileExistence),
        },
      }}
    />
  ),
  expandButtonStyles: {
    boxShadow: params.some(path => !path) ? INVALID_INPUT_BOX_SHADOW : undefined,
  },
  children: params
    .map((path, pathIdx) => ({
      Element: (
        <Node
          data={{
            type: NodeType.input,
            data: {
              placeholder: 'полный путь к файлу',
              id: `${ConditionType.fileExistence}_${pathIdx}`,
              value: path,
              onValueChange: newValue => onChangePathExistenceCondition({ newValue, pathIdx }),
              onDeleteItem:
                // не может быть 0 параметров
                params.length !== 1 ? () => onDeletePathExistenceCondition(pathIdx) : undefined,
            },
          }}
        />
      ),
    }))
    .concat({
      Element: (
        <Node
          data={{
            type: NodeType.button,
            data: {
              title: 'добавить путь к файлу',
              onClick: onAddPathToExistenceCondition,
            },
          }}
        />
      ),
    }),
});
