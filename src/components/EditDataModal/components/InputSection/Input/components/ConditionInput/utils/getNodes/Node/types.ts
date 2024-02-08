import { InputData } from './Input';

interface TextData {
  title: string;
  onDeleteItem: () => void;
}

interface ButtonData {
  title: string;
  onClick: () => void;
}

export enum NodeType {
  button = 'button',
  input = 'input',
  text = 'text',
}

export type NodeData =
  | GenericData<NodeType.text, TextData>
  | GenericData<NodeType.input, InputData>
  | GenericData<NodeType.button, ButtonData>;

export interface NodeProps {
  data: NodeData;
}
