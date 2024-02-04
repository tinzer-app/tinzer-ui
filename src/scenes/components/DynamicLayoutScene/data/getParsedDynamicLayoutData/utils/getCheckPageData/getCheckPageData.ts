import { ComponentType } from '@components/Component';
import { TagComponent } from '@components/Tag/styled';
import { getTagDataOfReportResult } from '@global/utils';

import {
  ADDITIONAL_DATA_SECTION_STYLES,
  DATA_SECTION_TITLE_VARIANT,
  GENERAL_DATA_ITEM_STYLES,
  GENERAL_DATA_SECTION_STYLES,
  HORIZONTAL_GROUP_STYLES,
  PAGE_SECTION_TITLE_VARIANT,
  TIMESTAMP_ITEM_STYLES,
} from '../constants';
import { DynamicLayoutSceneData } from '../../types';
import { CheckPageData } from './types';
import { getInspectionResultTableData } from './getInspectionResultTableData';

export const getCheckPageData = ({
  title,
  description,
  creationTimestamp,
  lastEditionTimestamp,
  inspectionData,
  lastInspectionTimestamp,
}: CheckPageData): DynamicLayoutSceneData => ({
  title,
  data: [
    {
      type: ComponentType.horizontalComponentsGroup,
      styles: HORIZONTAL_GROUP_STYLES,
      data: [
        {
          type: ComponentType.verticalComponentsGroup,
          data: [
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
              data: getTagDataOfReportResult(inspectionData.status),
            },
            {
              type: ComponentType.text,
              styles: {
                mt: 4,
              },
              data: {
                value: 'создана',
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
                value: 'изменена',
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
            {
              type: ComponentType.text,
              styles: TIMESTAMP_ITEM_STYLES,
              data: {
                value: 'запущена',
                variant: DATA_SECTION_TITLE_VARIANT,
              },
            },
            {
              type: ComponentType.timestamp,
              styles: GENERAL_DATA_ITEM_STYLES,
              data: {
                timestamp: lastInspectionTimestamp,
              },
            },
          ],
        },
      ],
    },
    {
      type: ComponentType.text,
      styles: {
        mt: 10,
      },
      data: {
        value: 'результаты проверки',
        variant: PAGE_SECTION_TITLE_VARIANT,
      },
    },
    {
      type: ComponentType.table,
      styles: {
        mt: 2,

        [TagComponent]: {
          m: 'auto',
        },
      },
      data: getInspectionResultTableData(inspectionData),
    },
  ],
});
