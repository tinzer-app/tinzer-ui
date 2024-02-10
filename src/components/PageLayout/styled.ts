import css from '@styled-system/css';
import styled from 'styled-components';

import { Control as ControlComponent } from './Control';

export const Header = styled('header')(
  css({
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    mb: 10,
  }),
);

export const ControlsWrapper = styled('div')(
  css({
    ml: 5,
  }),
);

export const Control = styled(ControlComponent)(
  css({
    '&:not(:first-child)': {
      ml: 2,
    },
  }),
);
