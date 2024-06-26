import { ComponentType } from '@components/Component';
import { ButtonControlIconType, ControlType, ItemType } from '@global/types';

import { DynamicLayoutSceneData } from '../../types';
import {
  ADDITIONAL_DATA_SECTION_STYLES,
  CONTROL_ICONS_SIZE,
  DATA_SECTION_TITLE_VARIANT,
  GENERAL_DATA_ITEM_STYLES,
  GENERAL_DATA_SECTION_STYLES,
  HORIZONTAL_GROUP_STYLES,
  MAIN_DATA_SECTION_STYLES,
  TIMESTAMP_ITEM_STYLES,
} from '../constants';
import { GetConditionPageDataParams } from './types';

export const getConditionPageData = ({
  data: { title, description, creationTimestamp, lastEditionTimestamp, id, conditions },
  onModalOpen,
  onDeleteItem,
}: GetConditionPageDataParams): DynamicLayoutSceneData => ({
  title,
  controls: [
    {
      type: ControlType.button,
      data: {
        icon: {
          type: ButtonControlIconType.settings,
          data: {
            size: CONTROL_ICONS_SIZE,
          },
        },
        onClick: onModalOpen,
      },
    },
    {
      type: ControlType.button,
      data: {
        icon: {
          type: ButtonControlIconType.delete,
          data: {
            size: CONTROL_ICONS_SIZE,
          },
        },
        onClick: () => onDeleteItem({ id, itemType: ItemType.condition }),
      },
    },
  ],
  data: [
    {
      type: ComponentType.horizontalComponentsGroup,
      styles: HORIZONTAL_GROUP_STYLES,
      data: [
        {
          type: ComponentType.verticalComponentsGroup,
          styles: MAIN_DATA_SECTION_STYLES,
          data: [
            {
              type: ComponentType.text,
              data: {
                variant: DATA_SECTION_TITLE_VARIANT,
                value: 'описание',
              },
            },
            {
              type: ComponentType.text,
              styles: GENERAL_DATA_ITEM_STYLES,
              data: {
                value: description,
              },
            },
            {
              type: ComponentType.text,
              styles: GENERAL_DATA_SECTION_STYLES,
              data: {
                variant: DATA_SECTION_TITLE_VARIANT,
                value: 'параметры правила',
              },
            },
            {
              type: ComponentType.verticalComponentsGroup,
              styles: {
                ...GENERAL_DATA_ITEM_STYLES,
                display: 'flex',
                flexDirection: 'column',
                rowGap: 2,
              },
              data: conditions.map(conditionData => ({
                type: ComponentType.condition,
                data: conditionData,
              })),
            },
          ],
        },
        {
          type: ComponentType.verticalComponentsGroup,
          styles: ADDITIONAL_DATA_SECTION_STYLES,
          data: [
            {
              type: ComponentType.text,
              data: {
                value: 'создано',
                variant: DATA_SECTION_TITLE_VARIANT,
              },
            },
            {
              type: ComponentType.timestamp,
              styles: GENERAL_DATA_ITEM_STYLES,
              data: {
                timestamp: creationTimestamp,
              },
            },
            {
              type: ComponentType.text,
              styles: TIMESTAMP_ITEM_STYLES,
              data: {
                value: 'изменено',
                variant: DATA_SECTION_TITLE_VARIANT,
              },
            },
            {
              type: ComponentType.timestamp,
              styles: GENERAL_DATA_ITEM_STYLES,
              data: {
                timestamp: lastEditionTimestamp,
              },
            },
          ],
        },
      ],
    },
    // TODO: раскомментить, когда будет готов соответствующий функционал
    // {
    //   type: ComponentType.horizontalComponentsGroup,
    //   styles: {
    //     ...HORIZONTAL_GROUP_STYLES,
    //     alignItems: 'baseline',
    //     mt: 10,
    //   },
    //   data: [
    //     {
    //       type: ComponentType.text,
    //       data: {
    //         value: 'последние проверки',
    //         variant: PAGE_SECTION_TITLE_VARIANT,
    //       },
    //     },
    //     {
    //       type: ComponentType.link,
    //       data: {
    //         to: `/reports`,
    //         title: 'все проверки',
    //       },
    //     },
    //   ],
    // },
    // {
    //   type: ComponentType.pageSection,
    //   data: {
    //     endpoint: `conditions/${id}`,
    //   },
    // },
  ],
});
