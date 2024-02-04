import { InspectionStatus, ConditionData, ConditionType } from '@global/types';

import { DynamicLayoutSceneType, ResponseData } from './getParsedDynamicLayoutData';

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

const MOCK_PROJECT_PAGE_DATA: ResponseData = {
  type: DynamicLayoutSceneType.project,
  data: {
    id: 'proj-date-fns',
    title: 'date-fns',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl nunc mi ipsum faucibus vitae aliquet. Purus faucibus ornare suspendisse sed nisi. Urna condimentum mattis pellentesque id nibh tortor id aliquet lectus. Commodo elit at imperdiet dui accumsan sit amet nulla facilisi. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt. Aliquam vestibulum morbi blandit cursus risus at. Risus at ultrices mi tempus imperdiet. Orci eu lobortis elementum nibh.',
    link: 'https://github.com/date-fns/date-fns',
    branch: 'main',
    creationTimestamp: '2023-01-07 21:32:11',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    lastInspectionStatus: InspectionStatus.success,
  },
};

const MOCK_CONDITION_PAGE_DATA: ResponseData = {
  type: DynamicLayoutSceneType.condition,
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
  type: DynamicLayoutSceneType.inspection,
  data: {
    id: 'check-date-fns',
    title: 'Проверка package.json в date-fns',
    description:
      'Проверка наличия строк "license": "MIT" и "description": "Modern JavaScript date utility library" в package.json',
    creationTimestamp: '2023-12-24 11:05:58',
    lastEditionTimestamp: '2023-12-24 11:05:58',
    lastInspectionTimestamp: '2023-12-29 04:00:00',
    inspectionData: {
      status: InspectionStatus.success,
      details: {
        conditions: MOCK_DATE_FNS_CONDITIONS,
        projectsInspections: [
          {
            project: {
              title: 'date-fns',
              id: 'date-fns',
            },
            status: InspectionStatus.success,
            // здесь будет статус по каждому параметру для каждого файла
            conditionsStatuses: [InspectionStatus.success, InspectionStatus.success],
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
