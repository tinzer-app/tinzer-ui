import { GetIsInputValidParams } from './types';

const LINK_REGEX = new RegExp(
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
);

export const getIsInputValid = ({ data, value }: GetIsInputValidParams) => {
  const { isRequired, inputType } = data;

  if (isRequired && !value) {
    return false;
  }

  if (inputType === 'url') {
    return !!value?.match(LINK_REGEX);
  }

  return true;
};
