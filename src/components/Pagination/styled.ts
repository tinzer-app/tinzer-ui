import css from '@styled-system/css';
import styled from 'styled-components';
import Pagination from '@mui/material/Pagination';

export const PaginationComponent = styled(Pagination)(({ theme: { variants } }) =>
  css({
    li: {
      ':not(:first-child)': {
        ml: 3,
      },
    },

    button: {
      ...variants.body2Regular,

      m: 0,

      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: 'backgroundSecondary',
      },

      '&.Mui-selected': {
        backgroundColor: 'backgroundPrimaryInverse',
        color: 'textPrimaryInverse',

        ':hover': {
          backgroundColor: 'backgroundPrimaryInverse',
        },
      },
    },
  }),
);
