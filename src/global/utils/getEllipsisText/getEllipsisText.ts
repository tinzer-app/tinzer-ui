const ELLIPSIS_STRING = '...';

export const getEllipsisText = (text: string, maxLength = 20) =>
  text.length <= maxLength
    ? text
    : text.slice(0, maxLength - ELLIPSIS_STRING.length) + ELLIPSIS_STRING;
