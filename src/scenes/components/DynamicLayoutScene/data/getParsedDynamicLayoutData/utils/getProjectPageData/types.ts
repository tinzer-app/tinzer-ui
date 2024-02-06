import { GeneralProjectData, InspectionStatus } from '@global/types';

export interface ProjectPageData extends GeneralProjectData {
  id: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
}
