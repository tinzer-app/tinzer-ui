export const TD_STYLES = {
  py: 3,

  ':first-child': {
    pl: 4,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  ':last-child': {
    pr: 4,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  ':not(:last-child)': {
    pr: 9,
  },
};
