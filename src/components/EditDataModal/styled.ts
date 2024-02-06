import css from '@styled-system/css';
import styled from 'styled-components';

import { InputSection as InputSectionComponent, Button as ButtonComponent } from './components';

export const InputSections = styled('div')(
  css({
    mt: 5,
  }),
);

export const ButtonsSection = styled('div')(
  css({
    mt: 10,
    display: 'flex',
    justifyContent: 'flex-end',
  }),
);

export const Button = styled(ButtonComponent)(
  css({
    ':not(:first-child)': {
      ml: 5,
    },
  }),
);

export const InputSection = styled(InputSectionComponent)(
  css({
    ':not(:first-child)': {
      mt: 8,
    },
  }),
);
