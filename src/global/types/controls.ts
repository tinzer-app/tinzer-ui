interface SettingsIconData {
  size?: number;
}

export interface ButtonControlData {
  icon: IconData;
  onClick: () => void;
}

export enum ButtonControlIconType {
  settings = 'settings',
}

export type IconData = GenericData<ButtonControlIconType.settings, SettingsIconData>;

export enum ControlType {
  button = 'button',
}

export type ControlData = GenericData<ControlType.button, ButtonControlData>;
