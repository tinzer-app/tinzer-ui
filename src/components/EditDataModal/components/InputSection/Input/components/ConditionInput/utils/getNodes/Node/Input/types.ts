export interface InputData {
  id: string;
  value: string;
  placeholder: string;
  onValueChange: (newValue: string) => void;
  onDeleteItem?: () => void;
}

export interface InputProps {
  data: InputData;
}
