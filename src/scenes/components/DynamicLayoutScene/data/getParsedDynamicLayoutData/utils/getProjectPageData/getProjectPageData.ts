import { ComponentType } from '@components/Component';
import { getTagDataOfReportResult } from '@global/utils';

import { DynamicLayoutSceneData } from '../../types';
import {
  GENERAL_DATA_ITEM_STYLES,
  GENERAL_DATA_SECTION_STYLES,
  HORIZONTAL_GROUP_STYLES,
} from './constants';
import { ProjectPageData } from './types';

export const getProjectPageData = ({
  title,
  id,
  description,
  link,
  branch,
  lastInspectionStatus,
  creationTimestamp,
  lastEditionTimestamp,
}: ProjectPageData): DynamicLayoutSceneData => ({
  title,
  data: [
    {
      type: ComponentType.horizontalComponentsGroup,
      styles: HORIZONTAL_GROUP_STYLES,
      data: [
        {
          type: ComponentType.verticalComponentsGroup,
          styles: {
            maxWidth: 800,
          },
          data: [
            {
              type: ComponentType.text,
              data: {
                variant: 'body2Semibold',
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
                variant: 'body2Semibold',
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
                variant: 'body2Semibold',
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
          styles: {
            ml: 10,
          },
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
                variant: 'body2Semibold',
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
              styles: {
                mt: 3,
              },
              data: {
                value: 'изменен',
                variant: 'body2Semibold',
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
    {
      type: ComponentType.horizontalComponentsGroup,
      styles: {
        justifyContent: 'space-between',
        alignItems: 'baseline',
        mt: 10,
      },
      data: [
        {
          type: ComponentType.text,
          data: {
            value: 'последние проверки',
            variant: 'h3Semibold',
          },
        },
        {
          type: ComponentType.link,
          data: {
            to: `/reports`,
            title: 'все проверки',
          },
        },
      ],
    },
    {
      type: ComponentType.pageSection,
      data: {
        endpoint: `conditions/${id}`,
      },
    },
  ],
});
