import { createContext, useContext, Dispatch, SetStateAction } from 'react';

import { ModalFormData } from '../types';

interface EditDataModalContextData {
  onResetButtonClick: () => void;
  onSubmitButtonClick: () => void;
  setFormData: Dispatch<SetStateAction<ModalFormData>>;
  formData: ModalFormData;
  setInvalidInputIds: Dispatch<SetStateAction<Set<string>>>;
  couldShowInvalidInputError: boolean;
}

export const EditDataModalContext = createContext<EditDataModalContextData | undefined>(undefined);

export const useEditDataModalContext = () => useContext(EditDataModalContext);
