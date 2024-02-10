import { GeneralItemData } from './common';

export interface RepositoryData {
  link: string;
  branch: string;
}

export interface GeneralProjectData extends GeneralItemData {
  repository: RepositoryData;
}
