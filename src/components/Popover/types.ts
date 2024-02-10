import { PopperProps } from '@mui/material';
import { ReactElement, RefObject } from 'react';

export interface PopoverProps {
  Trigger: ReactElement;
  positionTriggerRef: RefObject<HTMLElement>;
  isOpen: boolean;
  children: ReactElement;
  onIsOpenChange: (isOpen: boolean) => void;
  placement: PopperProps['placement'];
  className?: string;
}
