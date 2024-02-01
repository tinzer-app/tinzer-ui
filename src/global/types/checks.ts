import { ConditionData } from './conditions';

interface ProjectData {
  title: string;
  id: string;
}

interface ProjectCheck {
  project: ProjectData;
  status: CheckStatus;
  conditionsStatuses: CheckStatus[];
}

interface CheckStatusDetails {
  conditions: ConditionData[];
  projectsChecks: ProjectCheck[];
}

export interface CheckResult {
  status: CheckStatus;
  details: CheckStatusDetails;
}

export enum CheckStatus {
  success = 'success',
  fail = 'fail',
  inProgress = 'inProgress',
}
