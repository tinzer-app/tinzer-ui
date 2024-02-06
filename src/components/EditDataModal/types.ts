import { ModalProps } from '@components/Modal';

import { ButtonData, InputData, InputSectionData } from './components';

export interface OnFormSubmitParams {
  formData: ModalFormData;
}

export type ModalFormData = Record<string, InputData>;

export interface EditDataModalData {
  title: string;
  inputSections: InputSectionData[];
  buttons: ButtonData[];
}

export interface EditDataModalProps extends Omit<ModalProps, 'children' | 'isOpen'> {
  data: EditDataModalData;
  onFormSubmit: (params: OnFormSubmitParams) => void;
}
