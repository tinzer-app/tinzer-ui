import { InspectionStatus } from '@global/types';

export interface ReportData {
  id: string;
  title: string;
  description: string;
  lastInspectionStatus: InspectionStatus;
  lastInspectionTimestamp?: Timestamp | null;
}
