import React, { FC } from 'react';

import { SearchItemProps } from './types';
import { ButtonWrapper, DeleteButton, Icon, Title, Wrapper } from './styled';

export const SearchItem: FC<SearchItemProps> = ({ data, onItemDelete, className }) => {
  const { id, title } = data;

  const onDeleteButtonClick = () => onItemDelete(id);

  return (
    <Wrapper className={className}>
      <Title variant="caption1Semibold" value={title} />
      <ButtonWrapper>
        <DeleteButton onClick={onDeleteButtonClick}>
          <Icon size={8} />
        </DeleteButton>
      </ButtonWrapper>
    </Wrapper>
  );
};
