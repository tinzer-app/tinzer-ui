import { InspectionStatus } from '@global/types';

export interface ProjectData {
  id: string;
  link: string;
  title: string;
  description: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
}
