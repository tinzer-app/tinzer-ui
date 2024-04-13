import { ComponentType } from '@components/Component';
import { getTagDataOfReportResult } from '@global/utils';

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
import { GetProjectPageDataParams } from './types';
import { ButtonControlIconType, ControlType, ItemType } from '@global/types';

export const getProjectPageData = ({
  data: {
    title,
    id,
    description,
    repository: { link, branch },
    lastInspectionStatus,
    creationTimestamp,
    lastEditionTimestamp,
  },
  onModalOpen,
  onDeleteItem,
}: GetProjectPageDataParams): DynamicLayoutSceneData => ({
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
        onClick: () => onDeleteItem({ id, itemType: ItemType.project }),
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
                value: 'проект',
              },
            },
            {
              type: ComponentType.link,
              styles: GENERAL_DATA_ITEM_STYLES,
              data: {
                isInNewTab: true,
                to: link,
                title: title,
              },
            },
            {
              type: ComponentType.text,
              styles: GENERAL_DATA_SECTION_STYLES,
              data: {
                variant: DATA_SECTION_TITLE_VARIANT,
                value: 'ветка',
              },
            },
            {
              type: ComponentType.text,
              styles: GENERAL_DATA_ITEM_STYLES,
              data: {
                value: branch,
              },
            },
            {
              type: ComponentType.text,
              styles: GENERAL_DATA_SECTION_STYLES,
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
          ],
        },
        {
          type: ComponentType.verticalComponentsGroup,
          styles: ADDITIONAL_DATA_SECTION_STYLES,
          data: [
            {
              type: ComponentType.tag,
              data: getTagDataOfReportResult(lastInspectionStatus),
            },
            {
              type: ComponentType.text,
              styles: {
                mt: 4,
              },
              data: {
                value: 'создан',
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
                value: 'изменен',
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
