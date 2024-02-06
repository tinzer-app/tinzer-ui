import React, { FC } from 'react';

import { useEditDataModalContext } from '@components/EditDataModal';

import { ButtonProps } from './types';
import { ButtonComponent } from './styled';

export const Button: FC<ButtonProps> = ({ data, className }) => {
  const { title, type, onClick } = data;

  const buttonType = type === 'custom' ? 'button' : type;

  const { onResetButtonClick, onSubmitButtonClick } = useEditDataModalContext() || {};

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (type === 'submit') {
      onSubmitButtonClick?.();
    } else if (type === 'reset') {
      onResetButtonClick?.();
    }

    onClick?.();
  };

  return (
    <ButtonComponent onClick={onButtonClick} type={buttonType} className={className}>
      {title}
    </ButtonComponent>
  );
};
