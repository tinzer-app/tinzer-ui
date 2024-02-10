import React, { FC } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import { Popper } from './styled';
import { PopoverProps } from './types';

export const Popover: FC<PopoverProps> = ({
  Trigger,
  positionTriggerRef,
  isOpen,
  children,
  onIsOpenChange,
  placement,
  className,
}) => {
  const onClickAway = () => onIsOpenChange(false);

  return (
    <ClickAwayListener onClickAway={onClickAway}>
      <span className={className}>
        {Trigger}
        <Popper open={isOpen} anchorEl={positionTriggerRef.current} placement={placement}>
          {children}
        </Popper>
      </span>
    </ClickAwayListener>
  );
};
