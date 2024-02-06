import css from '@styled-system/css';
import styled from 'styled-components';

export const ButtonComponent = styled('button')(({ theme: { variants }, type }) =>
  css({
    ...variants.body1Semibold,
    px: 6,
    py: 3,
    borderRadius: 8,
    border: 'none',
    textAlign: 'center',
    cursor: 'pointer',
    display: 'block',
    backgroundColor: type === 'reset' ? 'backgroundSecondary' : 'oceanBlue',
    color: type === 'reset' ? 'oceanBlue' : 'textPrimaryInverse',

    ':hover': {
      backgroundColor: type === 'reset' ? 'backgroundTertiary' : 'darkOceanBlue',
    },
  }),
);
