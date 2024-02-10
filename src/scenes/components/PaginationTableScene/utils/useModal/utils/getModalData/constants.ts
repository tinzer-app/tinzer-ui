import { EditDataModalData, InputType } from '@components/EditDataModal';

import {
  BRANCH_ID,
  CONDITIONS_ID,
  DESCRIPTION_ID,
  LINK_ID,
  PROJECTS_ID,
  TITLE_ID,
} from '../../constants';

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

export const INSPECTIONS_MODAL_DATA: EditDataModalData = {
  title: 'новая проверка',
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
      label: 'проекты *',
      input: {
        type: InputType.search,
        id: PROJECTS_ID,
        data: {
          initItems: [],
          queryConfig: {
            endpoint: 'modal/projects',
          },
        },
      },
    },
    {
      label: 'правила *',
      input: {
        type: InputType.search,
        id: CONDITIONS_ID,
        data: {
          initItems: [],
          queryConfig: {
            endpoint: 'modal/conditions',
          },
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
