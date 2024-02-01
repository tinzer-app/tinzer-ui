import { ComponentType } from '@components/Component';
import { getTagDataOfReportResult } from '@global/utils';

import { DynamicLayoutSceneData } from '../../types';
import { ProjectPageData } from './types';

export const getProjectPageData = ({
  title,
  id,
  description,
  link,
  branch,
  lastReportStatus,
  creationTimestamp,
  lastEditionTimestamp,
}: ProjectPageData): DynamicLayoutSceneData => ({
  title,
  data: [
    {
      type: ComponentType.horizontalComponentsGroup,
      data: [
        {
          type: ComponentType.verticalComponentsGroup,
          data: [
            {
              type: ComponentType.link,
              data: {
                to: link,
                title: 'ссылка на проект',
              },
            },
            {
              type: ComponentType.text,
              data: {
                value: branch,
              },
            },
            {
              type: ComponentType.text,
              data: {
                value: description,
              },
            },
          ],
        },
        {
          type: ComponentType.verticalComponentsGroup,
          data: [
            {
              type: ComponentType.tag,
              data: getTagDataOfReportResult(lastReportStatus),
            },
            {
              type: ComponentType.text,
              data: {
                value: creationTimestamp,
              },
            },
            {
              type: ComponentType.text,
              data: {
                value: lastEditionTimestamp,
              },
            },
          ],
        },
      ],
    },
    {
      type: ComponentType.horizontalComponentsGroup,
      data: [
        {
          type: ComponentType.text,
          data: {
            value: 'Последние проверки',
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
