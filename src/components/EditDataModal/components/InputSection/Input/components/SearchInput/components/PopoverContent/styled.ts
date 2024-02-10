import css from '@styled-system/css';
import styled from 'styled-components';

export const Wrapper = styled('div')(({ theme: { colors } }) =>
  css({
    py: 2,
    borderRadius: 8,
    border: `1px solid ${colors.borderStrong}`,
    width: 280,
    maxHeight: 250,
    overflowY: 'auto',
    backgroundColor: colors.backgroundPrimary,
    boxShadow: '4px 4px 8px 0px rgba(34, 60, 80, 0.2)',
  }),
);

export const SearchWrapper = styled('div')(
  css({
    px: 3,
    mb: 4,
  }),
);
