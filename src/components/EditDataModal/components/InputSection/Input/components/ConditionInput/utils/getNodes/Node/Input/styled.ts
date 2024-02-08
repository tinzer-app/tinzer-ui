import styled from 'styled-components';

import { InputComponent as Input } from '../../../../../TextInput/styled';

export const InputComponent = styled(Input)(({ theme: { colors, variants } }) => ({
  width: 150,

  '::placeholder': {
    ...variants.body2Italic,

    color: colors.textSecondary,
  },
}));
