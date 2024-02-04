import { InspectionStatus } from '@global/types';

export interface ProjectPageData {
  title: string;
  id: string;
  description: string;
  link: string;
  branch: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
}
