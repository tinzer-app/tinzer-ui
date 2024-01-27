import {
  getParsedConditionsTableData,
  getParsedProjectsTableData,
  getParsedReportsTableData,
} from './utils';
import { PaginationTableSceneType, ResponseSceneData, TableSceneData } from './types';
import { CONDITIONS_PAGE_TITLE, PROJECTS_PAGE_TITLE, REPORTS_PAGE_TITLE } from './constants';

export const getParsedSceneData = (
  responseSceneData?: ResponseSceneData | null,
): TableSceneData | null => {
  switch (responseSceneData?.type) {
    case PaginationTableSceneType.projects: {
      return {
        title: PROJECTS_PAGE_TITLE,
        tableData: getParsedProjectsTableData(responseSceneData.data),
      };
    }

    case PaginationTableSceneType.conditions: {
      return {
        title: CONDITIONS_PAGE_TITLE,
        tableData: getParsedConditionsTableData(responseSceneData.data),
      };
    }

    case PaginationTableSceneType.reports: {
      return {
        title: REPORTS_PAGE_TITLE,
        tableData: getParsedReportsTableData(responseSceneData.data),
      };
    }

    default: {
      return null;
    }
  }
};
