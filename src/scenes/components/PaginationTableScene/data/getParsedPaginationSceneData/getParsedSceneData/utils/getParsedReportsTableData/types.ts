import { CheckStatus } from '@global/types';

export interface ReportData {
  id: string;
  title: string;
  description: string;
  lastReportTimestamp: string;
  lastReportResult: CheckStatus;
  conditionsCount: number;
}
