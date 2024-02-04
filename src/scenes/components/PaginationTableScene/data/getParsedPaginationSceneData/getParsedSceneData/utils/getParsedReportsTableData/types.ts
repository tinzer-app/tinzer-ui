import { InspectionStatus } from '@global/types';

export interface ReportData {
  id: string;
  title: string;
  description: string;
  lastInspectionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
  conditionsCount: number;
}
