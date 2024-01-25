import css from '@styled-system/css';
import styled from 'styled-components';

import { TD_X_PADDING } from './constants';

export const TableWrapper = styled('div')(
  css({
    mx: -TD_X_PADDING,
    width: 'calc(100% + 16px)',
  }),
);

export const TableComponent = styled('table')({
  width: '100%',
  borderCollapse: 'separate',
  borderSpacing: 0,
});
