import { EditDataModalData, InputType } from '@components/EditDataModal';

import { BRANCH_ID, CONDITIONS_ID, DESCRIPTION_ID, LINK_ID, TITLE_ID } from '../../constants';

export const PROJECTS_MODAL_DATA: EditDataModalData = {
  title: 'новый проект',
  inputSections: [
    {
      label: 'название *',
      input: {
        type: InputType.text,
        id: TITLE_ID,
        data: {
          isRequired: true,
        },
      },
    },
    {
      label: 'ссылка *',
      input: {
        type: InputType.text,
        id: LINK_ID,
        data: {
          inputType: 'url',
          isRequired: true,
        },
      },
    },
    {
      label: 'ветка *',
      input: {
        type: InputType.text,
        id: BRANCH_ID,
        data: {
          isRequired: true,
        },
      },
    },
    {
      label: 'описание',
      input: {
        type: InputType.text,
        id: DESCRIPTION_ID,
        data: {
          inputType: 'textArea',
        },
      },
    },
  ],
  buttons: [
    {
      type: 'reset',
      title: 'сбросить',
    },
    {
      type: 'submit',
      title: 'создать',
    },
  ],
};

export const CONDITIONS_MODAL_DATA: EditDataModalData = {
  title: 'новое правило',
  inputSections: [
    {
      label: 'название *',
      input: {
        type: InputType.text,
        id: TITLE_ID,
        data: {
          isRequired: true,
        },
      },
    },
    {
      label: 'описание',
      input: {
        type: InputType.text,
        id: DESCRIPTION_ID,
        data: {
          inputType: 'textArea',
        },
      },
    },
    {
      label: 'условия',
      input: {
        type: InputType.condition,
        id: CONDITIONS_ID,
        data: [],
      },
    },
  ],
  buttons: [
    {
      type: 'reset',
      title: 'сбросить',
    },
    {
      type: 'submit',
      title: 'создать',
    },
  ],
};
