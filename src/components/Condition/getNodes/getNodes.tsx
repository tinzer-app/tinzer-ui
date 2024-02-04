import React from 'react';

import { Text } from '@components/Text';
import { NodeData } from '@components/TreeStructure';
import { ConditionData, ConditionType } from '@global/types';

import { SubNodeTitle } from './styled';

export const getNodes = (data: ConditionData): NodeData[] => {
  switch (data.type) {
    case ConditionType.fileExistence: {
      return [
        {
          Element: <Text value="наличие файлов" variant="body2Semibold" />,
          children: data.params.map(path => ({
            Element: <SubNodeTitle value={path} variant="body1Regular" />,
          })),
        },
      ];
    }

    case ConditionType.stringsInFilesMatching: {
      return [
        {
          Element: <Text value="наличие строк в файлах" variant="body2Semibold" />,
          children: data.params.map(({ path, patterns }) => ({
            Element: <SubNodeTitle value={path} variant="body1Regular" />,
            children: patterns.map(pattern => ({
              Element: <SubNodeTitle value={pattern} variant="body1Regular" />,
            })),
          })),
        },
      ];
    }

    default: {
      return [];
    }
  }
};
