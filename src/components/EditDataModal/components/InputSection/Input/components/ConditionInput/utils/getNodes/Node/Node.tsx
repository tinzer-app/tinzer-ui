import React, { FC } from 'react';

import { Text } from '@components/Text';

import { Input } from './Input';
import { NodeProps, NodeType } from './types';
import { AddButton, AddIcon, DeleteButton, DeleteIcon, Wrapper } from './styled';

export const Node: FC<NodeProps> = ({ data }) => {
  switch (data.type) {
    case NodeType.text: {
      const { title, onDeleteItem } = data.data;

      return (
        <Wrapper>
          <Text value={title} variant="body2Semibold" textColor="textPrimary" />
          <DeleteButton type="button" onClick={onDeleteItem}>
            <DeleteIcon size={12} />
          </DeleteButton>
        </Wrapper>
      );
    }

    case NodeType.input: {
      const { onDeleteItem } = data.data;

      return (
        <Wrapper>
          <Input data={data.data} />
          {onDeleteItem && (
            <DeleteButton type="button" onClick={onDeleteItem}>
              <DeleteIcon size={12} />
            </DeleteButton>
          )}
        </Wrapper>
      );
    }

    case NodeType.button: {
      const { title, onClick } = data.data;

      return (
        <Wrapper>
          <AddButton type="button" onClick={onClick}>
            <AddIcon size={16} />
            <Text value={title} variant="body2Regular" />
          </AddButton>
        </Wrapper>
      );
    }

    default: {
      return null;
    }
  }
};
