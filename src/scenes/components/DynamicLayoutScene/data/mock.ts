import {
  InspectionStatus,
  ConditionData,
  ConditionType,
  SingleParamConditionData,
  ItemType,
} from '@global/types';

import { ResponseData } from './getParsedDynamicLayoutData';

const MOCK_DATE_FNS_CONDITIONS: ConditionData[] = [
  {
    type: ConditionType.fileExistence,
    id: '1',
    params: ['./package.json', './src/App.tsx'],
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2',
    params: [
      {
        path: './package.json',
        patterns: ['"license": "MIT"', '"description": "Modern JavaScript date utility library"'],
      },
      {
        path: './README.md',
        patterns: ['read me :)'],
      },
    ],
  },
];

const MOCK_DATE_FNS_SINGLE_CONDITIONS: SingleParamConditionData[] = [
  {
    type: ConditionType.fileExistence,
    id: '1',
    params: './package.json',
  },
  {
    type: ConditionType.fileExistence,
    id: '1.1',
    params: './src/App.tsx',
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.1',
    params: {
      path: './package.json',
      pattern: '"license": "MIT"',
    },
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.2',
    params: {
      path: './package.json',
      pattern: '"description": "Modern JavaScript date utility library"',
    },
  },
  {
    type: ConditionType.stringsInFilesMatching,
    id: '2.3',
    params: {
      path: './README.md',
      pattern: 'read me :)',
    },
  },
];

const MOCK_PROJECT_PAGE_DATA: ResponseData = {
  type: ItemType.project,
  data: {
    id: 'proj-date-fns',
    title: 'date-fns',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet. Purus faucibus ornare suspendisse sed nisi.',
    repository: {
      link: 'https://github.com/date-fns/date-fns',
      branch: 'main',
      title: 'date-fns',
      ownerNickname: 'johnDate-fns',
    },
    creationTimestamp: '2023-01-07 21:32:11',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    lastInspectionStatus: InspectionStatus.success,
  },
};

const MOCK_CONDITION_PAGE_DATA: ResponseData = {
  type: ItemType.condition,
  data: {
    id: 'cond-date-fns',
    title: 'Лицензия и описание',
    description:
      'Наличие строк "license": "MIT" и "description": "Modern JavaScript date utility library" в package.json',
    creationTimestamp: '2023-01-07 21:32:11',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    conditions: MOCK_DATE_FNS_CONDITIONS,
  },
};

const MOCK_CHECK_PAGE_DATA: ResponseData = {
  type: ItemType.inspection,
  data: {
    projects: [
      {
        title: 'проект 1',
        id: 'проект 1',
      },
      {
        title: 'date-fns',
        id: 'date-fns',
      },
      {
        title: 'ui-library',
        id: 'ui-library',
      },
    ],
    conditions: [
      {
        title: 'шаблон 1',
        id: 'шаблон 1',
      },
      {
        title: 'наличие dockerfile',
        id: 'наличие dockerfile',
      },
    ],
    id: 'check-date-fns',
    title: 'Проверка package.json в date-fns',
    description:
      'Проверка наличия строк "license": "MIT" и "description": "Modern JavaScript date utility library" в package.json',
    creationTimestamp: '2023-12-24 11:05:58',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    lastInspectionTimestamp: '2023-12-29 04:00:00',
    inspectionData: {
      status: InspectionStatus.fail,
      details: {
        conditions: MOCK_DATE_FNS_SINGLE_CONDITIONS,
        projectsInspections: [
          {
            project: {
              title: 'example',
              id: '1',
            },
            status: InspectionStatus.fail,
            conditionsStatuses: [
              InspectionStatus.success,
              InspectionStatus.fail,
              InspectionStatus.success,
              InspectionStatus.fail,
              InspectionStatus.fail,
            ],
          },
          {
            project: {
              title: 'date-fns',
              id: 'date-fns',
            },
            status: InspectionStatus.success,
            conditionsStatuses: [
              InspectionStatus.success,
              InspectionStatus.success,
              InspectionStatus.success,
              InspectionStatus.success,
              InspectionStatus.success,
            ],
          },
        ],
      },
    },
  },
};

export const getMockData = (entity: string) => {
  switch (entity) {
    case 'projects': {
      return MOCK_PROJECT_PAGE_DATA;
    }

    case 'conditions': {
      return MOCK_CONDITION_PAGE_DATA;
    }

    default: {
      return MOCK_CHECK_PAGE_DATA;
    }
  }
};
