import { ThemeColor } from '@theme/colors';

export interface EqualSizeIconProps {
  size?: number;
  className?: string;
}

export interface ColorfulIconProps extends EqualSizeIconProps {
  color?: ThemeColor;
}
