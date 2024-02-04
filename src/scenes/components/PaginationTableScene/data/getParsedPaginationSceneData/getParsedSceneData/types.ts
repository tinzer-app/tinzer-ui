import { TableData } from '@components/Table';

import { ConditionData, ProjectData, ReportData } from './utils';

export enum PaginationTableSceneType {
  projects = 'projects',
  conditions = 'conditions',
  inspections = 'inspection',
}

export interface TableSceneData {
  title: string;
  tableData: TableData;
}

export type ResponseSceneData =
  | GenericData<PaginationTableSceneType.projects, ProjectData[]>
  | GenericData<PaginationTableSceneType.conditions, ConditionData[]>
  | GenericData<PaginationTableSceneType.inspections, ReportData[]>;
