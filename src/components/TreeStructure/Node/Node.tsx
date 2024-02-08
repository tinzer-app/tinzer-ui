import React, { FC, useState } from 'react';

import { NodeProps } from './types';
import { ExpandButton, ExpandIcon, NodeWrapper } from './styled';

export const Node: FC<NodeProps> = ({ data, lvl }) => {
  const { Element, children, expandButtonStyles } = data;

  const [isOpen, setIsOpen] = useState(false);

  const onButtonClick = () => setIsOpen(prev => !prev);

  const isLeaf = !children?.length;
  const iconDirection = isOpen ? 'bottom' : 'right';

  return (
    <>
      <NodeWrapper lvl={lvl} isLeaf={isLeaf}>
        {!isLeaf && (
          <ExpandButton
            type="button"
            onClick={onButtonClick}
            expandButtonStyles={expandButtonStyles}>
            <ExpandIcon direction={iconDirection} />
          </ExpandButton>
        )}
        {Element}
      </NodeWrapper>
      {isOpen && (
        <>
          {children?.map((childNodeData, idx) => (
            <Node data={childNodeData} lvl={lvl + 1} key={`${lvl}_${idx}`} />
          ))}
        </>
      )}
    </>
  );
};
