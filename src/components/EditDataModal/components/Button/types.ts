export interface ButtonData {
  type: 'submit' | 'reset' | 'custom';
  title: string;
  onClick?: () => void;
}

export interface ButtonProps {
  data: ButtonData;
  className?: string;
}
