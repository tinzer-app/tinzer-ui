import css from '@styled-system/css';
import styled from 'styled-components';

import { InputComponent as Input } from '../../styled';
import { INVALID_INPUT_BOX_SHADOW } from '../../constants';

interface InputProps {
  isValid: boolean;
}

export const TextArea = styled('textarea')(({ theme: { variants, colors } }) =>
  css({
    ...variants.body1Regular,
    p: 1,
    border: `1px solid ${colors.borderStrong}`,
    borderRadius: 4,
    resize: 'none',
  }),
);

export const InputComponent = styled(Input)<InputProps>(({ theme: { colors }, isValid }) => ({
  width: 300,

  ...(isValid
    ? {}
    : {
        borderColor: colors.error,
        boxShadow: INVALID_INPUT_BOX_SHADOW,
      }),
}));
