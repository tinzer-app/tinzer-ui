import styled from 'styled-components';

import { Link as LinkComponent } from '@components/Link';

export const Link = styled(LinkComponent)({
  display: 'inline-block',
  maxWidth: '100%',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden',
});
