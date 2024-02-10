import { EditDataModalData, InputType } from '@components/EditDataModal';
import { CheckPageData } from '@scenes/components/DynamicLayoutScene/data';
import {
  CONDITIONS_ID,
  DESCRIPTION_ID,
  PROJECTS_ID,
  TITLE_ID,
} from '@scenes/components/PaginationTableScene/utils';

export const getInspectionModalData = ({
  title,
  description,
  conditions,
  projects,
}: CheckPageData): EditDataModalData => ({
  title: 'изменение проверки',
  inputSections: [
    {
      label: 'название *',
      input: {
        type: InputType.text,
        id: TITLE_ID,
        data: {
          initValue: title,
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
          initValue: description,
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
          initItems: projects,
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
          initItems: conditions,
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
      title: 'сохранить',
    },
  ],
});
