import { InspectionStatus } from '@global/types';

import { PaginationTableSceneType, ResponseData } from './getParsedPaginationSceneData';

const getReportResult = (idx: number) => {
  switch (idx % 3) {
    case 0: {
      return InspectionStatus.success;
    }

    case 1: {
      return InspectionStatus.inProgress;
    }

    default: {
      return InspectionStatus.fail;
    }
  }
};

const MOCK_PROJECTS_PAGE_DATA: ResponseData = {
  type: PaginationTableSceneType.projects,
  data: Array.from({ length: 10 }).map((_, idx) => ({
    id: idx.toString(),
    repository: {
      branch: 'master',
      link: 'https://www.google.com/',
    },
    title: `Проект ${idx}`,
    description: 'Краткое описание...',
    creationTimestamp: '2022-08-10T10:30:04-05:00',
    lastEditionTimestamp: '2022-08-10T10:30:04-05:00',
    lastInspectionStatus: getReportResult(idx),
  })),
  paginationData: {
    pagesCount: 10,
    currentPage: 1,
  },
};

const MOCK_CONDITIONS_PAGE_DATA: ResponseData = {
  type: PaginationTableSceneType.conditions,
  data: Array.from({ length: 10 }).map((_, idx) => ({
    title: `правило ${idx}`,
    description: 'Краткое описание...',
    id: idx.toString(),
    creationTimestamp: '2022-08-10T10:30:04-05:00',
    lastEditionTimestamp: '2023-12-24T04:56:37-05:00',
  })),
  paginationData: {
    pagesCount: 2,
    currentPage: 1,
  },
};

const MOCK_REPORTS_PAGE_DATA: ResponseData = {
  type: PaginationTableSceneType.inspections,
  paginationData: {
    pagesCount: 3,
    currentPage: 1,
  },
  data: Array.from({ length: 10 }).map((_, idx) => ({
    id: idx.toString(),
    title: `проверка ${idx}`,
    description: 'Краткое описание...',
    lastInspectionTimestamp: '2022-08-10T10:30:04-05:00',
    lastInspectionStatus: getReportResult(idx),
    conditionsCount: idx,
  })),
};

export const getMockData = (endpoint: string) => {
  switch (endpoint) {
    case 'projects': {
      return MOCK_PROJECTS_PAGE_DATA;
    }

    case 'conditions': {
      return MOCK_CONDITIONS_PAGE_DATA;
    }

    default: {
      return MOCK_REPORTS_PAGE_DATA;
    }
  }
};
