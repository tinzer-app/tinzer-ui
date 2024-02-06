import React, { FC } from 'react';

import { Text } from '@components/Text';
import { Modal } from '@components/Modal';

import { EditDataModalProps } from './types';
import { EditDataModalContext } from './context';
import { useEditDataModal } from './useEditDataModal';
import { InputSections, InputSection, ButtonsSection, Button } from './styled';

export const EditDataModal: FC<EditDataModalProps> = ({
  onClose,
  onFormSubmit,
  data: { title, inputSections, buttons },
}) => {
  const {
    onSubmitButtonClick,
    onResetButtonClick,
    setFormData,
    formData,
    setInvalidInputIds,
    couldShowInvalidInputError,
  } = useEditDataModal({ inputSections, onFormSubmit });

  return (
    <EditDataModalContext.Provider
      value={{
        onSubmitButtonClick,
        onResetButtonClick,
        setFormData,
        formData,
        setInvalidInputIds,
        couldShowInvalidInputError,
      }}>
      <Modal isOpen onClose={onClose}>
        <>
          <Text value={title} variant="h2Semibold" textColor="textPrimary" />
          <form>
            <InputSections>
              {inputSections.map((sectionData, idx) => (
                <InputSection data={sectionData} key={idx} />
              ))}
            </InputSections>
          </form>
          <ButtonsSection>
            {buttons.map((buttonData, idx) => (
              <Button data={buttonData} key={idx} />
            ))}
          </ButtonsSection>
        </>
      </Modal>
    </EditDataModalContext.Provider>
  );
};
