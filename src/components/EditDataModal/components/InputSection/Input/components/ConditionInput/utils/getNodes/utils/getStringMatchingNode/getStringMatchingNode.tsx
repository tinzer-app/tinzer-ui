import React from 'react';

import { ConditionType } from '@global/types';
import { NodeData } from '@components/TreeStructure';

import { NodeType, Node } from '../../Node';
import { GetStringMatchingNodeParams } from './types';
import { INVALID_INPUT_BOX_SHADOW } from '@components/EditDataModal';

export const getStringMatchingNode = ({
  params,
  onAddPathToMatchingCondition,
  onAddStringToMatchingCondition,
  onChangePathMatchingCondition,
  onChangePatternMatchingCondition,
  onDeleteCondition,
  onDeletePathMatchingCondition,
  onDeletePatternMatchingCondition,
}: GetStringMatchingNodeParams): NodeData => ({
  Element: (
    <Node
      data={{
        type: NodeType.text,
        data: {
          title: 'наличие строк в файлах',
          onDeleteItem: () => onDeleteCondition(ConditionType.stringsInFilesMatching),
        },
      }}
    />
  ),
  expandButtonStyles: {
    boxShadow: params.some(({ path, patterns }) => !path || patterns.some(pattern => !pattern))
      ? INVALID_INPUT_BOX_SHADOW
      : undefined,
  },
  children: params
    .map<NodeData>(({ path, patterns }, pathIdx) => ({
      Element: (
        <Node
          data={{
            type: NodeType.input,
            data: {
              placeholder: 'полный путь к файлу',
              value: path,
              onDeleteItem:
                params.length !== 1 ? () => onDeletePathMatchingCondition(pathIdx) : undefined,
              onValueChange: newValue => onChangePathMatchingCondition({ newValue, pathIdx }),
              id: `${ConditionType.stringsInFilesMatching}_${pathIdx}`,
            },
          }}
        />
      ),
      expandButtonStyles: {
        boxShadow: patterns.some(pattern => !pattern) ? INVALID_INPUT_BOX_SHADOW : undefined,
      },
      children: patterns
        .map((pattern, patternIdx) => ({
          Element: (
            <Node
              data={{
                type: NodeType.input,
                data: {
                  placeholder: 'строка',
                  value: pattern,
                  onDeleteItem:
                    patterns.length !== 1
                      ? () => onDeletePatternMatchingCondition({ pathIdx, patternIdx })
                      : undefined,
                  onValueChange: newValue =>
                    onChangePatternMatchingCondition({ newValue, pathIdx, patternIdx }),
                  id: `${ConditionType.stringsInFilesMatching}_${pathIdx}_${patternIdx}`,
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
                  title: 'добавить строку',
                  onClick: () => onAddStringToMatchingCondition(pathIdx),
                },
              }}
            />
          ),
        }),
    }))
    .concat({
      Element: (
        <Node
          data={{
            type: NodeType.button,
            data: {
              title: 'добавить путь к файлу',
              onClick: onAddPathToMatchingCondition,
            },
          }}
        />
      ),
    }),
});
