interface SettingsIconData {
  size?: number;
}

export interface ButtonControlData {
  icon: IconData;
  onClick: () => void;
}

export enum ButtonControlIconType {
  settings = 'settings',
  run = 'run',
  delete = 'delete',
}

export type IconData = GenericData<ButtonControlIconType, SettingsIconData>;

export enum ControlType {
  button = 'button',
}

export type ControlData = GenericData<ControlType.button, ButtonControlData>;
