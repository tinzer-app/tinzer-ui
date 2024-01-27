import { ReportResult } from '@global/types';

export interface ProjectData {
  id: string;
  link: string;
  title: string;
  description: string;
  creationTimestamp: string;
  lastEditionTimestamp: string;
  lastReportResult: ReportResult;
}
