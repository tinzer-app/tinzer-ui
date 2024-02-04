import { SystemStyleObject } from '@styled-system/css';

import { ComponentType } from '../ComponentContent';
import { GetComponentWrapperStylesParams } from './types';

export const getComponentWrapperStyles = ({
  data,
}: GetComponentWrapperStylesParams): SystemStyleObject => {
  switch (data.type) {
    case ComponentType.horizontalComponentsGroup: {
      return {
        display: 'flex',
      };
    }

    default: {
      return {};
    }
  }
};
