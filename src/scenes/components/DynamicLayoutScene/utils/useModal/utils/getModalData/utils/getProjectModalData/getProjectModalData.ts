import { EditDataModalData, InputType } from '@components/EditDataModal';
import { ProjectPageData } from '@scenes/components/DynamicLayoutScene/data';
import {
  BRANCH_ID,
  DESCRIPTION_ID,
  OWNER_NICKNAME_ID,
  REPOSITORY_TITLE_ID,
  TITLE_ID,
} from '@scenes/components/PaginationTableScene/utils';

export const getProjectModalData = ({
  title,
  description,
  repository,
}: ProjectPageData): EditDataModalData => ({
  title: 'изменение проекта',
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
      label: 'название репозитория *',
      input: {
        type: InputType.text,
        id: REPOSITORY_TITLE_ID,
        data: {
          initValue: repository.title,
          isRequired: true,
        },
      },
    },
    {
      label: 'никнейм владельца репозитория *',
      input: {
        type: InputType.text,
        id: OWNER_NICKNAME_ID,
        data: {
          initValue: repository.ownerNickname,
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
          initValue: repository.branch,
          isRequired: true,
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
