import css from '@styled-system/css';
import styled from 'styled-components';

import { ComponentWrapperProps } from './types';
import { getComponentWrapperStyles } from './getComponentWrapperStyles';

export const ComponentWrapper = styled('div')<ComponentWrapperProps>(({ data, styles }) =>
  css({
    ...getComponentWrapperStyles({ data }),
    ...styles,
  }),
);
