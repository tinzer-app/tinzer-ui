import { OnFormSubmitParams } from '../types';
import { InputSectionData } from '../components';

export interface UseEditModalDataParams {
  onFormSubmit: (params: OnFormSubmitParams) => void;
  inputSections: InputSectionData[];
}
