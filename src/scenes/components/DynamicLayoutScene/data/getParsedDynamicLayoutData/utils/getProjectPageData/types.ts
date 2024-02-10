import {
  GeneralProjectData,
  InspectionStatus,
  RepositoryData as RepositoryDataCore,
} from '@global/types';

interface RepositoryData extends RepositoryDataCore {
  title: string;
  ownerNickname: string;
}

export interface ProjectPageData extends Omit<GeneralProjectData, 'repository'> {
  id: string;
  creationTimestamp: Timestamp;
  lastEditionTimestamp: Timestamp;
  lastInspectionStatus: InspectionStatus;
  repository: RepositoryData;
}
