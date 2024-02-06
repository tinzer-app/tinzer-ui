import { GeneralProjectData, InspectionStatus } from '@global/types';

export interface ProjectData extends GeneralProjectData {
  id: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
}
