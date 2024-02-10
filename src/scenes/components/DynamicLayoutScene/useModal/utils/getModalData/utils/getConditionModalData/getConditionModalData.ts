import { EditDataModalData, InputType } from '@components/EditDataModal';
import { ConditionPageData } from '@scenes/components/DynamicLayoutScene/data';
import {
  CONDITIONS_ID,
  DESCRIPTION_ID,
  TITLE_ID,
} from '@scenes/components/PaginationTableScene/utils';

export const getConditionModalData = ({
  title,
  description,
  conditions,
}: ConditionPageData): EditDataModalData => ({
  title: 'изменение правила',
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
      label: 'условия',
      input: {
        type: InputType.condition,
        id: CONDITIONS_ID,
        data: conditions,
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
