import { useEffect, useState } from 'react';

import { UseEditModalDataParams } from './types';
import { getInitFormData } from './getInitFormData';

export const useEditDataModal = ({ onFormSubmit, inputSections }: UseEditModalDataParams) => {
  const [formData, setFormData] = useState(() => getInitFormData(inputSections));
  const [invalidInputIds, setInvalidInputIds] = useState(() => new Set<string>());
  const [isSubmitButtonClicked, setIsSubmitButtonClicked] = useState(false);

  const isFormValid = invalidInputIds.size === 0;

  const onResetButtonClick = () => setFormData(getInitFormData(inputSections));
  const onSubmitButtonClick = () => {
    setIsSubmitButtonClicked(true);

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
