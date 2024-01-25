export const TD_X_PADDING = 4;

export const TD_STYLES = {
  py: 3,

  ':first-child': {
    pl: TD_X_PADDING,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },

  ':last-child': {
    pr: TD_X_PADDING,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },

  ':not(:last-child)': {
    pr: 9,
  },
};
