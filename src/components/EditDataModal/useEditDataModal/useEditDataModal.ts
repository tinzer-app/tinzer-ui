import { useEffect, useState } from 'react';

import { UseEditModalDataParams } from './types';
import { getIsConditionsInFormValid, getInitFormData } from './utils';

export const useEditDataModal = ({ onFormSubmit, inputSections }: UseEditModalDataParams) => {
  const [formData, setFormData] = useState(() => getInitFormData(inputSections));
  const [invalidInputIds, setInvalidInputIds] = useState(() => new Set<string>());
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

  const onResetButtonClick = () => setFormData(getInitFormData(inputSections));
  const onSubmitButtonClick = () => {
    setIsSubmitButtonClicked(true);

    const isFormValid = invalidInputIds.size === 0 && getIsConditionsInFormValid(formData);

    if (isFormValid) {
      onFormSubmit({ formData });
    }
  };

  useEffect(() => setFormData(getInitFormData(inputSections)), [inputSections, setFormData]);

  return {
    formData,
    setFormData,
    setInvalidInputIds,
    onResetButtonClick,
    onSubmitButtonClick,
    couldShowInvalidInputError: isSubmitButtonClicked,
  };
};
