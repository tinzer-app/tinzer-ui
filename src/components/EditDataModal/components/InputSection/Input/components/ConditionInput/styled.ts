import css from '@styled-system/css';
import styled from 'styled-components';

import { TreeStructure as TreeStructureComponent, NodeWrapper } from '@components/TreeStructure';

export const TreeStructure = styled(TreeStructureComponent)(
  css({
    [NodeWrapper]: {
      ':not(:first-child)': {
        mt: 2,
      },
    },
  }),
);
